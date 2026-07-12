@echo off
setlocal

set "ROOT=%~dp0"
set "PORTABLE_NODE=%ROOT%..\work\runtime\node_modules\node-win-x64\bin\node.exe"
set "NPM_CLI=C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js"

cd /d "%ROOT%"

echo.
echo =====================================================
echo   Parabrahman - Escuela de Vedanta Advaita
echo =====================================================
echo.
echo Iniciando la plataforma en http://localhost:3000
echo Para detenerla, vuelve a esta ventana y presiona Ctrl+C.
echo.

start "" powershell.exe -NoProfile -WindowStyle Hidden -Command "Start-Sleep -Seconds 4; Start-Process 'http://localhost:3000'"

if exist "%PORTABLE_NODE%" if exist "%NPM_CLI%" (
  set "PATH=%ROOT%..\work\runtime\node_modules\node-win-x64\bin;%PATH%"
  "%PORTABLE_NODE%" "%NPM_CLI%" run dev
) else (
  npm run dev
)

echo.
echo La plataforma se ha detenido.
pause
