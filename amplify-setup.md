# Configuración CI/CD con AWS Amplify

## Deployment automático configurado ✅

Amplify detecta automáticamente cambios en `frontend/` y deploya usando `amplify.yml`.

### Configuración actual:

1. **Build automático** - Cada push a `frontend/` activa el build
2. **Node.js 18** - Compatible con react-router-dom v6.26.2
3. **Yarn con frozen-lockfile** - Builds consistentes
4. **Cache optimizado** - Headers HTTP para mejor performance

### URLs importantes:
- **Amplify Console**: https://console.aws.amazon.com/amplify/
- **App actual**: http://banking-app-hackaton-2024.s3-website-us-west-2.amazonaws.com

### Estructura de rutas:
- `/` → Página Home (balance, acciones, préstamos)
- `/beneficios` → Página Beneficios (promociones, ofertas)

### Para habilitar GitHub Actions (opcional):
1. Agregar secrets: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AMPLIFY_APP_ID`
2. Descomentar workflow en `.github/workflows/amplify-deploy.yml`

### Comandos útiles:
```bash
# Build local
cd frontend && yarn build

# Ver logs de Amplify
aws amplify list-apps
```