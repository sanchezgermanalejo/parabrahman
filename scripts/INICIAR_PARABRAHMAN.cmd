@echo off
setlocal

for %%I in ("%~dp0..") do set "PLATFORM_ROOT=%%~fI"
for %%I in ("%PLATFORM_ROOT%\..") do set "WORKSPACE_ROOT=%%~fI"

set "NODE_DIR=%WORKSPACE_ROOT%\work\runtime\node_modules\node-win-x64\bin"
set "NODE_EXE=%NODE_DIR%\node.exe"
set "NEXT_CLI=%PLATFORM_ROOT%\node_modules\next\dist\bin\next"
set "LOG_FILE=%WORKSPACE_ROOT%\work\parabrahman-server.log"

if not exist "%NODE_EXE%" (
  echo.
  echo No se encontro el runtime de Parabrahman.
  echo Ruta esperada: %NODE_EXE%
  echo.
  pause
  exit /b 1
)

if not exist "%NEXT_CLI%" (
  echo.
  echo No se encontraron las dependencias de Parabrahman.
  echo Ruta esperada: %NEXT_CLI%
  echo.
  pause
  exit /b 1
)

cd /d "%PLATFORM_ROOT%"
set "PATH=%NODE_DIR%;%PATH%"
set "npm_config_cache=%WORKSPACE_ROOT%\work\npm-cache"

echo.
echo =====================================================
echo   Parabrahman - Escuela de Vedanta Advaita
echo =====================================================
echo.
echo Iniciando la plataforma en http://localhost:3000
echo El servidor quedara abierto en una ventana minimizada.
echo El primer arranque puede tardar hasta dos minutos.
echo.

powershell.exe -NoProfile -Command "try { $r=Invoke-WebRequest 'http://127.0.0.1:3000' -UseBasicParsing -TimeoutSec 6; if ($r.StatusCode -eq 200) { exit 0 } } catch {}; exit 1"
if errorlevel 1 (
  echo [%date% %time%] Iniciando Parabrahman...> "%LOG_FILE%"
  start "Parabrahman servidor" /min cmd.exe /d /c ""%NODE_EXE%" "%NEXT_CLI%" dev --webpack >> "%LOG_FILE%" 2>&1"
)

powershell.exe -NoProfile -Command "$limite=(Get-Date).AddSeconds(150); do { try { $r=Invoke-WebRequest 'http://127.0.0.1:3000' -UseBasicParsing -TimeoutSec 8; if ($r.StatusCode -eq 200) { exit 0 } } catch {}; Start-Sleep -Seconds 1 } while ((Get-Date) -lt $limite); exit 1"
if errorlevel 1 (
  echo.
  echo El servidor no pudo responder.
  echo Ultimas lineas del registro:
  echo -----------------------------------------------------
  powershell.exe -NoProfile -Command "if (Test-Path $env:LOG_FILE) { Get-Content $env:LOG_FILE -Tail 30 }"
  echo -----------------------------------------------------
  echo Registro completo: %LOG_FILE%
  pause
  exit /b 1
)

echo.
echo Parabrahman esta listo. Abriendo el navegador...
start "" "http://localhost:3000"
pause
