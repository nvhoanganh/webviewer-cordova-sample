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
  var viewerElement = document.getElementById('viewer');
  var viewer = new PDFTron.WebViewer({
      path: "js/lib",
      pdftronServer: 'https://demo.pdftron.com/', // Make sure to change this option to point to your own server in production
      initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/sample.pdf',
      enableAnnotations: true,
      disabledElements: [
        'menuButton'
      ]
  }, viewerElement);

  viewerElement.addEventListener('ready', function() {
    var viewerInstance = viewer.getInstance();
    // call apis (https://www.pdftron.com/documentation/web/guides/ui/apis)
  });
}

document.addEventListener("deviceready", onDeviceReady, false);