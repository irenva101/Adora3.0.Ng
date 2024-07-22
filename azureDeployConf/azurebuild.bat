powershell -Command "& {ng build --aot --output-hashing=all; Copy-Item "web.config" -Destination "..\..\Adora3.0.WebApp\wwwroot\dist"}"
pause