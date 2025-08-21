# Casos de Uso - Agente Inteligente PPAY

## Descripción General
El agente inteligente de PPAY genera itinerarios personalizados basados en la ubicación actual del usuario, horario y saldo disponible, sugiriendo actividades con beneficios y descuentos.

## Casos de Uso para Testing

### Caso 1: Usuario Nocturno - Marcela en Catamarca
**Contexto:**
- Usuario: Marcela
- Ubicación: Catamarca Centro
- Hora: 19:00 hs
- Saldo: $15,000

**Itinerario Esperado:**
1. **Café en Starbucks** - 25% OFF en café del día (19:00-19:30)
2. **Cena en McDonald's** - Postre gratis pagando con PPAY (19:45-20:30)
3. **Cine en Cinemark** - 2x1 en entradas, películas de acción/comedia/terror (21:00-23:00)

### Caso 2: Usuario Matutino - Carlos en Buenos Aires
**Contexto:**
- Usuario: Carlos
- Ubicación: Buenos Aires, Palermo
- Hora: 10:00 hs
- Saldo: $8,500

**Itinerario Esperado:**
1. **Desayuno en Havanna** - 20% OFF en medialunas (10:00-10:30)
2. **Compras en Farmacity** - 15% OFF en productos de higiene (11:00-11:30)
3. **Almuerzo en Subway** - 2x1 en sándwiches de 15cm (12:30-13:30)

### Caso 3: Usuario de Fin de Semana - Ana en Córdoba
**Contexto:**
- Usuario: Ana
- Ubicación: Córdoba Capital
- Hora: 16:00 hs (Sábado)
- Saldo: $22,000

**Itinerario Esperado:**
1. **Merienda en Café Martínez** - 30% OFF en tortas (16:00-17:00)
2. **Shopping en Falabella** - 25% OFF en ropa deportiva (17:30-19:00)
3. **Cena en Mostaza** - Combo familiar con descuento (20:00-21:00)
4. **Bowling en Cosmic** - 2x1 en partidas después de las 21:00

### Caso 4: Usuario con Saldo Limitado - Pedro en Mendoza
**Contexto:**
- Usuario: Pedro
- Ubicación: Mendoza Centro
- Hora: 14:00 hs
- Saldo: $3,200

**Itinerario Esperado:**
1. **Almuerzo en Grido** - Helado gratis comprando empanadas (14:00-15:00)
2. **Transporte en Metrobus** - 50% OFF en viajes con PPAY (15:30-16:00)
3. **Merienda en Panificadora** - Café + medialuna por $500 (17:00-17:30)

### Caso 5: Usuario Empresarial - Laura en Rosario
**Contexto:**
- Usuario: Laura
- Ubicación: Rosario, Zona Centro
- Hora: 12:30 hs (Día laboral)
- Saldo: $45,000

**Itinerario Esperado:**
1. **Almuerzo ejecutivo en Siga la Vaca** - 20% OFF menú ejecutivo (12:30-14:00)
2. **Café de trabajo en Starbucks** - WiFi gratis + 15% OFF (15:00-16:00)
3. **Cena de negocios en Parrilla Don Julio** - 25% OFF pagando con PPAY (20:00-22:00)

## Parámetros de Testing

### Variables de Entrada:
- **Ubicación:** Ciudad y zona específica
- **Hora actual:** Formato 24hs
- **Día de la semana:** Lunes-Domingo
- **Saldo disponible:** Monto en pesos argentinos
- **Preferencias del usuario:** Opcional (comida, entretenimiento, compras)

### Variables de Salida:
- **Mensaje de bienvenida personalizado**
- **Lista de actividades ordenadas por prioridad**
- **Tiempo estimado por actividad**
- **Descuentos y beneficios específicos**
- **Ahorro total estimado**

## Criterios de Validación

### Funcionales:
- ✅ El itinerario respeta las restricciones horarias de cada oferta
- ✅ Las actividades están disponibles en la ubicación del usuario
- ✅ El saldo del usuario es suficiente para las actividades sugeridas
- ✅ Las actividades están ordenadas lógicamente (desayuno → almuerzo → cena)

### No Funcionales:
- ✅ Respuesta del agente en menos de 2 segundos
- ✅ Interfaz intuitiva y fácil de usar
- ✅ Mensajes personalizados según hora del día
- ✅ Animaciones suaves y atractivas

## Casos Edge

### Caso 6: Sin Ofertas Disponibles
**Contexto:** Usuario en horario/ubicación sin ofertas activas
**Resultado Esperado:** Mensaje explicativo + sugerencias generales

### Caso 7: Saldo Insuficiente
**Contexto:** Usuario con saldo muy bajo
**Resultado Esperado:** Ofertas gratuitas o de muy bajo costo

### Caso 8: Ubicación Remota
**Contexto:** Usuario en ciudad sin comercios afiliados
**Resultado Esperado:** Ofertas online o sugerencia de ciudades cercanas