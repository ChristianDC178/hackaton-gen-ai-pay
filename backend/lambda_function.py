import json
import os
import warnings
warnings.filterwarnings(action="ignore", message=r"datetime.datetime.utcnow") 
from strands import Agent

json_data_example = """{
  "message": "Hola Juan, estas son las promociones disponibles en la provincia de Córdoba:",
  "promociones": [
    {
      "name": "McDonald's",
      "benefitValue": "15% de reintegro",
      "days": [
        "Lunes, Martes, Miércoles, Jueves, Viernes"
      ],
      "heading": "Gastronomía",
      "locations": [
        {
          "name": "Av. Colón 550, Córdoba",
          "lat": "-31.413500",
          "lon": "-64.181000"
        },
        {
          "name": "Dino Mall Ruta 20, Córdoba",
          "lat": "-31.418800",
          "lon": "-64.229100"
        },
        {
          "name": "Nuevocentro Shopping, Córdoba",
          "lat": "-31.412345",
          "lon": "-64.204567"
        }
      ]
    }]
}"""
  

# JSON data as multiline string
json_data = """
 [{
    "id": 73740,
    "typeCode": "Cashback",
    "name": "Supermercado Dia",
    "title": "Supermercado Dia",
    "limitAmountSubtitle": "Tope $6.000 por uso",
    "benefitValue": "25 reintegro",
    "description": "Pagando con Visa Personal Pay disfrutá de un 25 de reintegro. El tope se aplica solo en la primer compra que realices en la semana.",
    "heading": "Supermercado",
    "days": [
      "Lunes, Martes, Miércoles, Jueves, Viernes"
    ],
    "paymentMethods": [
      {
        "id": 3,
        "name": "Cualquier QR escaneado desde Personal Pay"
      },
      {
        "id": 5,
        "name": "Tarjeta Visa Personal Pay"
      }
    ],
    "image": "https://d21lwl1crfqjbc.cloudfront.net/reward/DIA.jpg",
    "partnerImage": "https://d21lwl1crfqjbc.cloudfront.net/partner/Supermercado Dia Logo (1).png",
    "generic": false,
    "ecommerce": null,
    "byBusinessGroup": false,
    "locations": [
      {
        "name": "Gallo 1201",
        "lat": "-34.596248",
        "lon": "-58.411350"
      },
      {
        "name": "1 de Marzo 1466",
        "lat": "-34.807102",
        "lon": "-58.426733"
      },
      {
        "name": "Junín 501, Rosario, Santa Fe Province, Argentina",
        "lat": "-32.928038",
        "lon": "-60.667796"
      },
      {
        "name": "Av. Corrientes N° 640, Microcentro",
        "lat": "-34.603861",
        "lon": "-58.376581"
      },
      {
        "name": "Av. General Paz N° 15.200, Liniers",
        "lat": "-34.610229",
        "lon": "-58.528364"
      },
      {
        "name": "Av. 7 N° 345, La Plata",
        "lat": "-34.906639",
        "lon": "-57.961337"
      },
      {
        "name": "Paseo 104 N° 320, Villa Gesell",
        "lat": "-37.247862",
        "lon": "-56.982007"
      },
      {
        "name": "San Martín 100, San Fernando del Valle de Catamarca",
        "lat": "-28.468854",
        "lon": "-65.768357"
      },
      {
        "name": "Calle Moreno N° 580, Tinogasta",
        "lat": "-28.463405",
        "lon": "-65.762499"
      },
      {
        "name": "Avenida 9 de Julio 400, Resistencia",
        "lat": "-27.454272",
        "lon": "-58.983152"
      },
      {
        "name": "Avenida 25 de Mayo 310, Rawson, Chubut, Argentina",
        "lat": "-43.300549",
        "lon": "-65.098655"
      },
      {
        "name": "Carlos Pellegrini 130, Ituzaingó, Corrientes, Argentina",
        "lat": "-27.594354",
        "lon": "-56.693922"
      },
      {
        "name": "Avenida Ramirez 140, Paraná, Entre Ríos, Argentina",
        "lat": "-31.717740",
        "lon": "-60.512625"
      },
      {
        "name": "Avenida 25 de Mayo 230, Formosa, Provincia de Formosa, Argentina",
        "lat": "-26.182624",
        "lon": "-58.166704"
      },
      {
        "name": "Patricias Argentinas 120, San Salvador de Jujuy, Jujuy, Argentina",
        "lat": "-24.187873",
        "lon": "-65.310782"
      },
      {
        "name": "Avenida San Martín 470, Santa Rosa, La Pampa, Argentina",
        "lat": "-36.621009",
        "lon": "-64.297380"
      },
      {
        "name": "Avenida 9 de Julio 880, San Rafael, Provincia de Mendoza, Argentina",
        "lat": "-34.623565",
        "lon": "-68.340947"
      },
      {
        "name": "1 de Marzo 100, La Rioja, Argentina",
        "lat": "-29.414486",
        "lon": "-66.846123"
      },
      {
        "name": "Avenida Roque Pérez 130, Posadas, Misiones, Argentina",
        "lat": "-27.361005",
        "lon": "-55.893855"
      },
      {
        "name": "Alderete 180, Neuquén, Argentina",
        "lat": "-38.950569",
        "lon": "-68.056420"
      },
      {
        "name": "Hilario Lagos 190, Viedma, Río Negro, Argentina",
        "lat": "-40.812207",
        "lon": "-63.001016"
      },
      {
        "name": "Avenida Belgrano 315, Salta, Argentina",
        "lat": "-24.787885",
        "lon": "-65.407113"
      },
      {
        "name": "Avenida Ignacio de la Roza 190, San Juan, Provincia de San Juan, Argentina",
        "lat": "-31.537685",
        "lon": "-68.528411"
      },
      {
        "name": "Avenida Illia 245, D5700AXN, Provincia de San Luis, Argentina",
        "lat": "-33.300983",
        "lon": "-66.342002"
      },
      {
        "name": "Zapiola 100, Río Gallegos, Santa Cruz, Argentina",
        "lat": "-51.621874",
        "lon": "-69.217630"
      },
      {
        "name": "27 de Febrero 815, Rosario, Provincia de Santa Fe, Argentina",
        "lat": "-32.968469",
        "lon": "-60.640239"
      },
      {
        "name": "Chaco 100, Santiago del Estero, Argentina",
        "lat": "-27.780803",
        "lon": "-64.267637"
      },
      {
        "name": "Avenida Prefectura Naval Argentina 170, Ushuaia, Tierra del Fuego, Argentina",
        "lat": "-54.809534",
        "lon": "-68.310878"
      },
      {
        "name": "Marco Avellaneda 450, San Miguel de Tucumán, Provincia de Tucumán, Argentina",
        "lat": "-26.822459",
        "lon": "-65.213958"
      }
    ],
    "minPayment": "Sin compra mínima",
    "usageLimit": "1 vez por semana",
  },
{
  "id": 84520,
  "typeCode": "Cashback",
  "name": "McDonald's",
  "title": "McDonald's",
  "limitAmountSubtitle": "Tope $2.000 por uso",
  "benefitValue": "15% de reintegro",
  "description": "Pagando con Visa Personal Pay disfrutá de un 15% de reintegro en McDonald's. Tope de reintegro $2.000 por uso. Válido solo en sucursales de Córdoba.",
  "heading": "Gastronomía",
  "days": [
    "Lunes, Martes, Miércoles, Jueves, Viernes"
  ],
  "paymentMethods": [
    {
      "id": 3,
      "name": "Cualquier QR escaneado desde Personal Pay"
    },
    {
      "id": 5,
      "name": "Tarjeta Visa Personal Pay"
    }
  ],
  "image": "https://d21lwl1crfqjbc.cloudfront.net/reward/McDonalds.jpg",
  "partnerImage": "https://d21lwl1crfqjbc.cloudfront.net/partner/McDonalds-Logo.png",
  "generic": false,
  "ecommerce": null,
  "byBusinessGroup": false,
  "locations": [
    {
      "name": "Av. Colón 550, Córdoba",
      "lat": "-31.413500",
      "lon": "-64.181000"
    },
    {
      "name": "Dino Mall Ruta 20, Córdoba",
      "lat": "-31.418800",
      "lon": "-64.229100"
    },
    {
      "name": "Nuevocentro Shopping, Córdoba",
      "lat": "-31.412345",
      "lon": "-64.204567"
    }
  ],
  "minPayment": "Sin compra mínima",
  "usageLimit": "1 vez por semana"
}, 
{
  "id": 84521,
  "typeCode": "Cashback",
  "name": "Café Martínez",
  "title": "Café Martínez",
  "limitAmountSubtitle": "Tope $1.500 por uso",
  "benefitValue": "10% de reintegro",
  "description": "Pagando con Visa Personal Pay disfrutá de un 10% de reintegro en Café Martínez. Tope de reintegro $1.500 por uso. Válido solo en sucursales de Mendoza.",
  "heading": "Gastronomía",
  "days": [
    "Lunes, Martes, Miércoles, Jueves, Viernes"
  ],
  "paymentMethods": [
    {
      "id": 3,
      "name": "Cualquier QR escaneado desde Personal Pay"
    },
    {
      "id": 5,
      "name": "Tarjeta Visa Personal Pay"
    }
  ],
  "image": "https://d21lwl1crfqjbc.cloudfront.net/reward/CafeMartinez.jpg",
  "partnerImage": "https://d21lwl1crfqjbc.cloudfront.net/partner/CafeMartinez-Logo.png",
  "generic": false,
  "ecommerce": null,
  "byBusinessGroup": false,
  "locations": [
    {
      "name": "Av. Arístides Villanueva 300, Mendoza",
      "lat": "-32.889523",
      "lon": "-68.844062"
    },
    {
      "name": "Peatonal Sarmiento 221, Ciudad de Mendoza",
      "lat": "-32.889754",
      "lon": "-68.844986"
    },
    {
      "name": "Shopping Palmares, Godoy Cruz, Mendoza",
      "lat": "-32.939778",
      "lon": "-68.875278"
    }
  ],
  "minPayment": "Sin compra mínima",
  "usageLimit": "1 vez por semana"
}]
"""


#def get_benefits(event, context):
def get_benefits(province, name):
  print("### Requesting --> get_benefits")

  if province == '':
    province = "Mendoza"  

  print("### Creating agent --> get_benefits")
  
  agent = Agent(
        model="us.amazon.nova-pro-v1:0",
        system_prompt=f"""Eres un asistente de recomendaciones de promociones y sucursales.
                          Cuando te pregunten por promociones debes usar los siguientes datos {json_data}""",
    )

  print("###Requesting --> llm")

# Send a message to the agent
  response = agent(f"""Filtra las promociones en la provincia {province}. 
                       La salida tiene que ser en formato json y asegurate de que estén los campos de name, benefitValue, days, heading, locations.
                       Además en el root del json agrega un campo message con un saludo inicial preparado por ti usando {name}.
                       No usar markdown
                       ### Ejemplo de respuesta:
                       {json_data_example}
                       """)
  
  #response2 = agent(f"""Filtra las promociones en la provincia {province}. 
  #                    Solo debes retornar un único json con  toda información, no usar markdown""")

  #print(response)
  #print(response2)
  return response


def lambda_handler(event, context):
    print("### Requesting --> lambda_handler")

    body = json.loads(event.get('body', '{}'))
    print(body)

    province = body.get('province', '')
    print(f"Province received: {province}")

    name = body.get('name', '')
    print(f"Province received: {name}")
    
    return get_benefits(province, name)

#get_benefits("buenos Aires", "Juan")
