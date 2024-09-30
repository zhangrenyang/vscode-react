import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import open from 'open';
let currentLanguage = '';
let data: any[] = [];
export function activate(context: vscode.ExtensionContext) {
	const defaultLanguage = currentLanguage || vscode.env.language;
	loadLanguageData(context, defaultLanguage);
	const treeDataProvider = new ResourceTreeDataProvider();
	const treeView = vscode.window.createTreeView('ReactView', { treeDataProvider });
	treeView.onDidChangeVisibility((e) => {
		if (e.visible) {
			openHtmlPage(context);
		}
	});
	vscode.commands.registerCommand('React.openLinkInBrowser', (link: string) => {
		const panel = vscode.window.createWebviewPanel(
			'ReactView',
			'React',
			vscode.ViewColumn.Beside,
			{
				enableScripts: true,
				retainContextWhenHidden: true,
			}
		);
		panel.webview.html = `<iframe src="${link}" style="width:100%; height:100vh;"></iframe>`;
		open(link);
	});
	vscode.commands.registerCommand('React.switchLanguage', () => {
		vscode.window.showQuickPick(['en', 'zh'], {
			placeHolder: 'Select language (en/zh)',
		}).then(selectedLanguage => {
			if (selectedLanguage) {
				loadLanguageData(context, selectedLanguage);
				treeDataProvider.refresh();
			}
		});
	});
}
export function deactivate() { }
function loadLanguageData(context: vscode.ExtensionContext, language: string) {
	const lang = language.split('-')[0] || 'en';
	const dataFileName = `data.${lang}.json`;
	const dataPath = path.join(__dirname, dataFileName);
	try {
		data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
		currentLanguage = language;
	} catch (error: any) {
		vscode.window.showErrorMessage(`Failed to load ${dataFileName}: ${error.message}`);
	}
}
function openHtmlPage(context: vscode.ExtensionContext) {
	const panel = vscode.window.createWebviewPanel(
		'ReactDataView',
		'React',
		vscode.ViewColumn.One,
		{
			enableScripts: true,
			retainContextWhenHidden: true,
		}
	);
	panel.webview.html = getHtmlContent();
}

function getHtmlContent() {
	let content = '';
	data?.forEach(category => {
		content += `<div class="p-4"><h1 class="text-2xl font-bold text-blue-600">${category.title}</h1></div>`;
		content += `<div class="grid grid-cols-4 gap-4">`;
		category?.children?.forEach(item => {
			content += `
					<div class="bg-white shadow-lg rounded-lg p-4">
						${item.image?.startsWith('http') ? `<img src="${item.image}" alt="${item.title}" class="h-16 mx-auto mb-4">` : '<div class="h-16 mx-auto mb-4"></div>'}
						<h3 class="text-lg font-bold text-gray-800 text-center">${item.title}</h3>
						<p class="text-sm text-gray-600 text-center mb-4">${item.description || ''}</p>
						<div class="flex justify-between">
							${item.homepage ? `<a href="${item.homepage}" target="_blank" class="text-blue-500 hover:underline">
								<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg height="32" width="32" t="1726812801801" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4240" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M946.5 505L560.1 118.8l-25.9-25.9c-12.3-12.2-32.1-12.2-44.4 0L77.5 505c-12.3 12.3-18.9 28.6-18.8 46 0.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8 12.1-12.1 18.7-28.2 18.7-45.3 0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204z m217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" p-id="4241"></path></svg>
							</a>`: ``}
							${item.repository ? `<a href="${item.repository}" target="_blank" class="text-blue-500 hover:underline">
								<svg height="32" width="32" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle color-fg-default">
									<path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
								</svg>
							</a>`: ``}
						</div>
					</div>
				`;
		});
		content += `</div>`;
	});
	return `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>React</title>
			<link href="https://static.docs-hub.com/styles_1726822363456.css" rel="stylesheet">
		</head>
		<body class="bg-gray-100">
			<div class="container mx-auto px-4">
				${content}
			</div>
		</body>
		</html>
	`;
}

class ResourceTreeDataProvider implements vscode.TreeDataProvider<TreeItem> {
	private _onDidChangeTreeData: vscode.EventEmitter<TreeItem | undefined | null> = new vscode.EventEmitter<TreeItem | undefined | null>();
	readonly onDidChangeTreeData: vscode.Event<TreeItem | undefined | null> = this._onDidChangeTreeData.event;
	getTreeItem(element: TreeItem): vscode.TreeItem {
		return element;
	}
	getChildren(element?: TreeItem): TreeItem[] {
		if (!element) {
			return data.map(item => new TreeItem(item.title, item.description, item.homepage, item.repository, item.image, item.children));
		}
		if (element.children) {
			return element.children.map(child => new TreeItem(child.title, child.description, child.homepage, child.repository, child.image, child.children));
		}
		return [];
	}
	refresh(): void {
		this._onDidChangeTreeData.fire(undefined);
	}
}

class TreeItem extends vscode.TreeItem {
	children?: any[];
	title: string;
	description: string;
	homepage: string;
	repository: string;
	image: string;

	constructor(title: string, description: string, homepage: string, repository: string, image: string, children?: any[]) {
		super(
			title,
			children ? vscode.TreeItemCollapsibleState.Collapsed : vscode.TreeItemCollapsibleState.None
		);
		this.title = title;
		this.description = description;
		this.homepage = homepage;
		this.repository = repository;
		this.image = image;
		this.children = children;

		if (this.homepage || this.repository) {
			this.command = {
				command: 'React.openLinkInBrowser',
				title: 'Open Link',
				arguments: [this.homepage || this.repository]
			};
		}

		if (this.homepage || this.repository) {
			this.iconPath = new vscode.ThemeIcon('link-external');
		}
	}
}
