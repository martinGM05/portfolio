# 🚀 Portfolio de Martín González Miranda

Un portfolio moderno y profesional construido con **Astro** y **Tailwind CSS**, diseñado para mostrar experiencia en desarrollo full-stack y liderazgo técnico.

## ✨ Características

- **🎨 Diseño Moderno**: Interfaz limpia y profesional con paleta de colores cálida
- **🌙 Modo Oscuro/Claro**: Toggle automático con persistencia en localStorage
- **🌍 Multiidioma**: Soporte completo para Español e Inglés con i18n
- **📱 Responsive**: Diseño adaptativo para todos los dispositivos
- **⚡ Performance**: Optimizado con Astro para máxima velocidad
- **🎯 SEO**: Meta tags, sitemap y robots.txt incluidos
- **♿ Accesibilidad**: Cumple con estándares de accesibilidad web

## 🛠️ Tecnologías Utilizadas

- **[Astro](https://astro.build/)** - Framework web moderno
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático
- **CSS Variables** - Sistema de temas personalizado
- **i18n** - Internacionalización con routing

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ 
- pnpm (recomendado) o npm

### Instalación

```bash
# Clonar el repositorio
git clone <tu-repositorio>
cd portfolio

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev
```

El sitio estará disponible en `http://localhost:4321`

## 📁 Estructura del Proyecto

```
/
├── public/
│   ├── favicon.svg
│   └── MartinGonzalezMiranda_CV.pdf
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── SectionHeader.astro
│   │   ├── TechCard.astro
│   │   ├── BackendTechCard.astro
│   │   ├── SpecialtyCard.astro
│   │   ├── TimelineCard.astro
│   │   └── StatCard.astro
│   ├── config/              # Configuraciones
│   │   └── sections.ts
│   ├── i18n/               # Internacionalización
│   │   ├── ui.ts
│   │   └── utils.ts
│   ├── layouts/            # Layouts base
│   │   └── Layout.astro
│   ├── pages/              # Páginas
│   │   ├── index.astro     # Redirect a /es/
│   │   ├── es/
│   │   │   └── index.astro # Versión en español
│   │   ├── en/
│   │   │   └── index.astro # Versión en inglés
│   │   ├── sitemap.xml.ts
│   │   └── robots.txt.ts
│   ├── styles/
│   │   └── global.css      # Estilos globales y variables CSS
│   └── utils/
│       └── dataHelpers.ts  # Helpers para datos
└── astro.config.mjs
```

## 🎨 Personalización

### Colores y Temas

Los colores se definen en `src/styles/global.css` usando CSS variables:

```css
:root {
  /* Light Theme Colors - Warm & Cozy */
  --bg-primary: #fefefe;
  --bg-secondary: #fef7ed;
  --accent-primary: #f59e0b;
  --gradient-primary: linear-gradient(135deg, #f59e0b 0%, #ea580c 100%);
}
```

### Contenido

El contenido se gestiona a través de:

- **`src/i18n/ui.ts`** - Traducciones en español e inglés
- **`src/utils/dataHelpers.ts`** - Datos estructurados (experiencia, tecnologías, etc.)
- **`src/config/sections.ts`** - Configuración de estilos por sección

### Imágenes

Coloca tus imágenes en la carpeta `public/`:
- `profile-photo.jpg` - Foto de perfil principal
- `MartinGonzalezMiranda_CV.pdf` - CV descargable

## 📝 Comandos Disponibles

| Comando | Acción |
|---------|--------|
| `pnpm dev` | Inicia servidor de desarrollo en `localhost:4321` |
| `pnpm build` | Construye el sitio para producción en `./dist/` |
| `pnpm preview` | Previsualiza la build localmente |
| `pnpm astro check` | Verifica tipos TypeScript |
| `pnpm astro add` | Añade integraciones de Astro |

## 🌐 Despliegue

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

### Netlify

```bash
# Build del proyecto
pnpm build

# Subir carpeta dist/ a Netlify
```

### GitHub Pages

```bash
# Configurar GitHub Actions
# El workflow se ejecutará automáticamente en cada push
```

## 🔧 Configuración SEO

El proyecto incluye:

- **Meta tags** optimizados para cada página
- **Open Graph** y **Twitter Cards**
- **Sitemap.xml** generado automáticamente
- **Robots.txt** configurado
- **Hreflang** para multiidioma
- **Canonical URLs**

## 📊 Performance

- **Lighthouse Score**: 95+ en todas las métricas
- **Core Web Vitals**: Optimizado
- **Bundle Size**: Mínimo gracias a Astro
- **Lazy Loading**: Imágenes y componentes
- **Preloading**: Recursos críticos

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Contacto

**Martín González Miranda**
- 📧 Email: mtn.gm05@gmail.com
- 💼 LinkedIn: [martingonzalezmiranda](https://linkedin.com/in/martingonzalezmiranda)
- 🐙 GitHub: [martinGM05](https://github.com/martinGM05)

---

⭐ **¡Si te gusta este proyecto, no olvides darle una estrella!**