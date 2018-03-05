#!/bin/bash
URL_SOURCE='/home/windic/Documentos/alojame/alojameApp_dev/dist/';
URL_DEST='/opt/lampp/htdocs/alojame/';

ng build --aot && rsync -r $URL_SOURCE $URL_DEST;
