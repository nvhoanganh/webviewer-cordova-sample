/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function onDeviceReady() {
	WebViewer({
			path: 'js/lib',
			pdftronServer: 'https://demo.pdftron.com/', // Make sure to change this option to point to your own server in production
			initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/sample.pdf',
			enableAnnotations: true,
			disabledElements: ['menuButton'],
		},
		document.getElementById('viewer')
	).then((instance) => {
		// i'm trying to customize the reader like this
		// but on IOS, it does not go into this code block
		// on browser , it works though

		alert('web viewer instance initialized');
		console.log('web viewer instance initialized');
		instance.closeElements(['toolsHeader', 'header']);
		instance.disableElements([
			'pageNavOverlay',
			'searchPanelResizeBar',
			'header',
			'toolsHeader',
			'noteState',
			'notesPanelResizeBar',
			'leftPanelResizeBar',
			'annotationPopup',
			'annotationGroupButton',
			'annotationCommentButton',
			'linkButton',
		]);

		instance.enableElements([
			'richTextPopup',
			'richTextUnderlineButton',
			'richTextItalicButton',
			'richTextColorPalette',
		]);

		instance.disableReplyForAnnotations(() => {
			return true;
		});

		instance.contextMenuPopup.add([
			{
				type: 'actionButton',
				img: 'icon-panel-bookmark-line',
				title: 'Bookmark',
				onClick: () => {
					alert('add bookmark');
				},
			},
		]);
	});
}

document.addEventListener('deviceready', onDeviceReady, false);

alert('App started');
