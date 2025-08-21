# Banking App - Hackaton Gen AI Pay

Una aplicación bancaria moderna con arquitectura separada frontend/backend.

## 📁 Estructura del Proyecto

```
├── frontend/           # Aplicación React (Frontend)
│   ├── src/
│   ├── dist/          # Build output
│   └── package.json
├── backend/           # API Backend (Futuro)
├── deploy.sh          # Script de deploy manual del frontend
├── buildspec.yml      # AWS CodeBuild config (no usado)
└── .github/workflows/ # GitHub Actions (deshabilitado)
```

## 🎯 Frontend (React + TypeScript)

### URLs de la aplicación:
- **Producción (CloudFront)**: https://d1r8xtqjhx68zh.cloudfront.net/
- **S3 Direct**: http://banking-app-hackaton-frontend.s3-website.us-west-2.amazonaws.com/

### 🚀 Deploy Manual del Frontend

Para deployar manualmente los cambios del frontend:

```bash
./deploy.sh
```

Este script:
1. 📦 Instala dependencias con `npm install`
2. 🔨 Construye la aplicación con `npm run build`
3. ☁️ Sincroniza archivos con S3
4. 🔄 Invalida el caché de CloudFront

### 🛠️ Desarrollo Local del Frontend

```bash
cd frontend
npm install
npm run dev
```

## 🏗️ Infraestructura AWS (Frontend)

### S3 Bucket
- **Nombre**: `banking-app-hackaton-frontend`
- **Región**: `us-west-2`
- **Configuración**: Static Website Hosting habilitado

### CloudFront Distribution
- **ID**: `E2A2U5E64JY2OG`
- **Domain**: `d1r8xtqjhx68zh.cloudfront.net`
- **Características**:
  - HTTPS obligatorio
  - Soporte para SPA (404 → index.html)
  - Invalidación automática en cada deploy

## 🔧 Comandos Útiles (Frontend)

- `./deploy.sh` - Deploy manual completo del frontend
- `cd frontend && npm run build` - Solo build del frontend
- `aws s3 sync frontend/dist/ s3://banking-app-hackaton-frontend/ --delete` - Solo sync S3
- `aws cloudfront create-invalidation --distribution-id E2A2U5E64JY2OG --paths "/*"` - Solo invalidación

## 📝 Notas

- **Deploy**: Solo manual, GitHub Actions deshabilitado por elección
- Los cambios en CloudFront pueden tomar 5-15 minutos en propagarse
- El script de deploy incluye invalidación automática de caché
- La aplicación frontend soporta routing del lado cliente (SPA)
- El backend será desarrollado e implementado por separado
