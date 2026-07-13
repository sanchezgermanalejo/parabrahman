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
echo El servidor quedara abierto en una ventana minimizada.
echo.

if exist "%PORTABLE_NODE%" if exist "%NPM_CLI%" (
  set "PATH=%ROOT%..\work\runtime\node_modules\node-win-x64\bin;%PATH%"
  powershell.exe -NoProfile -Command "if (Get-NetTCPConnection -LocalPort 3000 -State Listen -ErrorAction SilentlyContinue) { exit 0 } else { exit 1 }"
  if errorlevel 1 start "Parabrahman servidor" /min "%PORTABLE_NODE%" "%NPM_CLI%" run dev
) else (
  powershell.exe -NoProfile -Command "if (Get-NetTCPConnection -LocalPort 3000 -State Listen -ErrorAction SilentlyContinue) { exit 0 } else { exit 1 }"
  if errorlevel 1 start "Parabrahman servidor" /min npm run dev
)

powershell.exe -NoProfile -Command "$limite=(Get-Date).AddSeconds(45); do { try { $r=Invoke-WebRequest 'http://localhost:3000' -UseBasicParsing -TimeoutSec 2; if ($r.StatusCode -eq 200) { exit 0 } } catch {}; Start-Sleep -Milliseconds 500 } while ((Get-Date) -lt $limite); exit 1"
if errorlevel 1 (
  echo.
  echo El servidor no pudo responder. Revisa la ventana minimizada.
  pause
  exit /b 1
)

echo.
echo Parabrahman esta listo. Abriendo el navegador...
start "" "http://localhost:3000"
pause
