# Design System - Personal Pay Banking App

## 🎨 Actualización del Look & Feel

Se ha actualizado completamente el diseño de la aplicación bancaria del hackaton para alinearse con el design system de Personal Pay Mobile App.

## 🎯 Cambios Principales

### 1. Paleta de Colores
- **Primarios**: Basados en la paleta de Personal Pay (`#433AD4`, `#5A50F9`, `#7F77F9`)
- **Secundarios**: Teal (`#008047`, `#00AA5E`) y Orange (`#FF6200`, `#FF8E00`)
- **Backgrounds**: Gradientes suaves y superficies con blur effects
- **Textos**: Jerarquía mejorada con colores más definidos

### 2. Tipografía
- **Font Stack**: Sistema nativo optimizado para mejor rendimiento
- **Weights**: Uso estratégico de 500-800 para jerarquía visual
- **Letter Spacing**: Ajustes finos (-0.01em a -0.02em) para mejor legibilidad

### 3. Componentes Actualizados

#### Header Principal
- Gradiente mejorado con efectos de luz
- Avatar con backdrop-filter y hover effects
- Tabs con glassmorphism
- Notificaciones con micro-interacciones

#### Balance Card
- Sombras más sofisticadas con colores de marca
- Tipografía de montos mejorada
- Hover states en elementos interactivos

#### Action Buttons
- Iconos más grandes (64px) con border-radius redondeado
- Gradientes en lugar de colores planos
- Efectos de hover con transform y scale

#### Navigation
- Backdrop blur para efecto moderno
- Iconos más grandes y espaciado mejorado
- Estados activos más prominentes

#### Cards y Promociones
- Border-radius aumentado (20-24px)
- Sombras con colores de marca
- Efectos de hover consistentes
- Gradientes y overlays para profundidad

### 4. Micro-interacciones
- **Hover Effects**: Transform, scale, y translateY
- **Transitions**: 0.3s ease para suavidad
- **Box Shadows**: Progresivas con colores de marca
- **Backdrop Filters**: Para efectos de glassmorphism

### 5. Layout y Espaciado
- **Padding**: Incrementado para mejor respiración visual
- **Margins**: Más consistentes entre componentes
- **Border Radius**: Más redondeado para look moderno
- **Gaps**: Mejor espaciado en grids y flex layouts

## 🚀 Beneficios del Nuevo Design

1. **Consistencia Visual**: Alineado con Personal Pay mobile app
2. **Mejor UX**: Micro-interacciones y feedback visual
3. **Modernidad**: Glassmorphism, gradientes, y sombras sofisticadas
4. **Accesibilidad**: Mejor contraste y jerarquía tipográfica
5. **Performance**: Font stack optimizado y transiciones suaves

## 📱 Responsive Design

El diseño mantiene la estructura mobile-first con:
- Max-width: 430px (iPhone Pro Max)
- Componentes adaptables
- Touch targets optimizados
- Scrolling horizontal mejorado

## 🎨 Variables CSS

Todas las variables están definidas en `index.css`:
```css
:root {
  --primary-100: #433AD4;
  --secondary-teal-100: #008047;
  --secondary-orange-100: #FF6200;
  --background-90: #E6F7F6;
  --surface-white: #FFFFFF;
  --text-dark: #111524;
  /* ... más variables */
}
```

## 🔄 Archivos Modificados

- `src/index.css` - Variables globales y reset
- `src/App.css` - Container principal
- `src/pages/Home.css` - Layout de página
- `src/pages/Beneficios.css` - Página de beneficios
- `src/components/*.css` - Todos los componentes actualizados

## 📋 Próximos Pasos

1. Implementar animaciones más complejas con Framer Motion
2. Agregar dark mode usando las variables CSS
3. Optimizar para diferentes tamaños de pantalla
4. Implementar skeleton loaders con el nuevo design
5. Agregar más micro-interacciones en formularios