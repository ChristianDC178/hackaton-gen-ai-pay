# Configuración CI/CD con AWS Amplify

## Pasos para configurar el deployment automático:

### 1. Configurar AWS Amplify Console

1. Ve a [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Haz clic en "New app" > "Host web app"
3. Conecta tu repositorio de GitHub
4. Selecciona la rama `main` o `master`
5. En "Build settings", asegúrate de que detecte el archivo `amplify.yml` en `/frontend/amplify.yml`

### 2. Configurar variables de entorno en Amplify

En la consola de Amplify, ve a "Environment variables" y agrega:
- `NODE_VERSION`: `18`
- Cualquier variable específica de tu app desde `.env`

### 3. Configurar GitHub Secrets (opcional para workflow avanzado)

Si quieres usar el workflow de GitHub Actions, configura estos secrets en tu repositorio:
- `AWS_ACCESS_KEY_ID`: Tu access key de AWS
- `AWS_SECRET_ACCESS_KEY`: Tu secret key de AWS  
- `AMPLIFY_APP_ID`: El ID de tu app en Amplify

### 4. Configuración automática de triggers

Amplify detectará automáticamente cambios en la carpeta `frontend/` gracias a:
- El archivo `amplify.yml` está en la carpeta frontend
- La configuración de paths en el workflow de GitHub Actions

### 5. Verificar deployment

Cada push a archivos en `frontend/` activará:
1. Build automático en Amplify
2. Deploy a la URL de Amplify
3. Notificaciones de estado en GitHub

## URLs importantes:
- **Amplify Console**: https://console.aws.amazon.com/amplify/
- **Tu app actual**: http://banking-app-hackaton-2024.s3-website-us-west-2.amazonaws.com

## Comandos útiles:

```bash
# Para deployar manualmente desde local
cd frontend
yarn build
aws s3 sync dist/ s3://tu-bucket-name --delete

# Para ver logs de Amplify
aws amplify list-apps
aws amplify get-job --app-id YOUR_APP_ID --branch-name main --job-id JOB_ID
```