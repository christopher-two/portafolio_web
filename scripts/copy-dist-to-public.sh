#!/bin/bash
# Script para copiar el contenido de carpetas dist de proyectos externos a la carpeta public de Next.js
# Uso: ./scripts/copy-dist-to-public.sh /ruta/al/proyecto/dist nombre_destino

if [ $# -ne 2 ]; then
  echo "Uso: $0 /ruta/al/proyecto/dist nombre_destino"
  exit 1
fi

DIST_PATH="$1"
DEST_NAME="$2"
PUBLIC_PATH="$(dirname "$0")/../public/$DEST_NAME"

# Elimina la carpeta destino si existe
echo "Eliminando $PUBLIC_PATH si existe..."
rm -rf "$PUBLIC_PATH"

# Copia el contenido del dist al destino
echo "Copiando $DIST_PATH a $PUBLIC_PATH ..."
cp -r "$DIST_PATH" "$PUBLIC_PATH"

echo "¡Listo! Ahora puedes acceder a /$DEST_NAME en tu sitio Next.js."
