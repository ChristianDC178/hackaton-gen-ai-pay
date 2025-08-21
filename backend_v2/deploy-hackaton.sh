#!/bin/bash

# Script para deployar la función Lambda hackaton
# Usar: ./deploy-hackaton.sh

set -e

FUNCTION_NAME="hackaton"
REGION="us-west-2"
PROFILE="hackaton"

echo "🚀 Iniciando deploy de Lambda function: $FUNCTION_NAME"

# Crear directorio temporal para el package
TEMP_DIR=$(mktemp -d)
echo "📁 Directorio temporal: $TEMP_DIR"

# Copiar archivos de la función
cp hackaton_lambda.py $TEMP_DIR/lambda_function.py
cp hackaton_requirements.txt $TEMP_DIR/requirements.txt

cd $TEMP_DIR

# Instalar dependencias
echo "📦 Instalando dependencias..."
pip install -r requirements.txt -t .

# Crear el ZIP package usando Python
echo "🗜️ Creando package ZIP..."
python3 -c "
import zipfile
import os
import glob

def create_zip():
    with zipfile.ZipFile('lambda-deployment-package.zip', 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk('.'):
            for file in files:
                if file != 'lambda-deployment-package.zip':
                    file_path = os.path.join(root, file)
                    arcname = os.path.relpath(file_path, '.')
                    zipf.write(file_path, arcname)

create_zip()
print('ZIP package created successfully')
"

# Verificar si la función existe
echo "🔍 Verificando si la función Lambda existe..."
if ~/.local/bin/aws lambda get-function --function-name $FUNCTION_NAME --profile $PROFILE --region $REGION >/dev/null 2>&1; then
    echo "🔄 Actualizando función existente..."
    ~/.local/bin/aws lambda update-function-code \
        --function-name $FUNCTION_NAME \
        --zip-file fileb://lambda-deployment-package.zip \
        --profile $PROFILE \
        --region $REGION
else
    echo "🆕 Creando nueva función Lambda..."
    ~/.local/bin/aws lambda create-function \
        --function-name $FUNCTION_NAME \
        --runtime python3.9 \
        --role arn:aws:iam::$(~/.local/bin/aws sts get-caller-identity --profile $PROFILE --query Account --output text):role/lambda-execution-role \
        --handler lambda_function.lambda_handler \
        --zip-file fileb://lambda-deployment-package.zip \
        --timeout 60 \
        --memory-size 512 \
        --profile $PROFILE \
        --region $REGION \
        --description "Hackaton Lambda function for filtering promotions by province using Amazon Nova"
fi

echo "✅ Deploy completado exitosamente!"
echo "📋 Función: $FUNCTION_NAME"
echo "🌍 Región: $REGION"

# Limpiar directorio temporal
cd - > /dev/null
rm -rf $TEMP_DIR
echo "🧹 Limpieza completada"
