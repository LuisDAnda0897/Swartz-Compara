# Dashboard Comercial de Asesores

Portal estático para capturar resultados comerciales por asesor, calcular métricas automáticamente, generar gráficas y exportar el reporte como PNG o PDF.

## Funciones
- Captura de asesor, ciudad, tipo, meta, ventas, ventas del mes anterior, referidos, cotizaciones, AXA y GNP.
- Cálculo automático de ventas totales, referidos, avance global a meta y mix AXA + GNP.
- Reconocimiento de mejor resultado, mayor crecimiento y mejor avance a meta.
- Gráficas de ventas por asesor, composición de ventas y avance a meta.
- Ranking del periodo.
- Persistencia local en el navegador.
- Exportación del reporte a PNG y PDF.

## Uso
Abre `dashboard-asesores/index.html` o publica el repositorio con GitHub Pages y accede a `/dashboard-asesores/`.

El portal usa Chart.js, html2canvas y jsPDF desde CDN, por lo que requiere conexión a internet para cargar esas librerías.
