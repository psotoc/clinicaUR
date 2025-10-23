# Sistema de Gestión de Noticias - Clínica Chinita

## ¿Qué se implementó?

Se ha creado un sistema completo para que un administrador pueda gestionar noticias dinámicamente usando Supabase como backend.

## Archivos Creados

1. **supabase-config.js** - Configuración de Supabase con tus credenciales
2. **admin-login.html** - Página de inicio de sesión para administradores
3. **admin-panel.html** - Panel de administración para gestionar noticias (CRUD completo)
4. **noticias.html** (actualizado) - Carga noticias dinámicamente desde Supabase
5. **noticia-detalle.html** (actualizado) - Muestra artículos individuales según ID en la URL

## ¿Cómo usar el sistema?

### Para Administradores:

1. **Acceder al panel de administración:**
   - Abre `admin-login.html` en tu navegador
   - Ingresa el email y contraseña del usuario admin que creaste en Supabase
   - Serás redirigido automáticamente a `admin-panel.html`

2. **Crear una nueva noticia:**
   - En el panel, haz clic en "Nueva Noticia"
   - Completa el formulario:
     - **Título**: Título principal de la noticia
     - **Resumen**: Descripción breve (se muestra en la lista)
     - **Contenido**: Contenido completo con editor de texto enriquecido (puedes dar formato, agregar listas, etc.)
     - **Imagen**: Sube una imagen para la noticia (opcional)
     - **Autor**: Por defecto "Comunicaciones"
     - **Tiempo de Lectura**: Ej. "5 min"
     - **Destacar**: Marca si quieres que aparezca como noticia destacada en la portada
   - Haz clic en "Guardar Noticia"

3. **Editar una noticia:**
   - En la lista de noticias, haz clic en "Editar"
   - Modifica los campos que necesites
   - Haz clic en "Guardar Noticia"

4. **Eliminar una noticia:**
   - En la lista de noticias, haz clic en "Eliminar"
   - Confirma la eliminación

### Para Visitantes:

1. **Ver noticias:**
   - Accede a `noticias.html`
   - Verás la noticia destacada en grande arriba
   - Debajo aparecerá un grid con todas las demás noticias

2. **Leer una noticia completa:**
   - Haz clic en "Leer más" en cualquier noticia
   - Serás llevado a `noticia-detalle.html` con el contenido completo

## Características del Sistema

### Panel de Administración:
- ✅ Autenticación segura con Supabase Auth
- ✅ Crear, editar y eliminar noticias
- ✅ Editor de texto enriquecido (Quill) para formato de contenido
- ✅ Subida de imágenes a Supabase Storage
- ✅ Opción de marcar noticias como "destacadas"
- ✅ Vista de tabla con todas las noticias

### Página de Noticias:
- ✅ Carga dinámica desde Supabase
- ✅ Noticia destacada mostrada prominentemente
- ✅ Grid responsivo con el resto de noticias
- ✅ Formato de fecha en español
- ✅ Imágenes cargadas desde Supabase Storage
- ✅ Placeholder bonito si no hay imagen

### Página de Detalle:
- ✅ Carga artículo por ID desde URL
- ✅ Breadcrumb dinámico
- ✅ Título de página dinámico
- ✅ Contenido con formato HTML
- ✅ Manejo de errores (si no existe la noticia)

## Seguridad

- Las políticas de Row Level Security en Supabase permiten:
  - ✅ **Lectura pública**: Cualquiera puede ver las noticias
  - ✅ **Escritura protegida**: Solo usuarios autenticados pueden crear/editar/eliminar

## Próximos Pasos Recomendados

1. **Crea tu primera noticia de prueba** desde el panel admin
2. **Verifica que aparezca** en la página de noticias
3. **Opcional**: Puedes crear más usuarios admin desde la sección Authentication en Supabase

## Soporte

Si tienes algún problema:
1. Verifica que las credenciales de Supabase estén correctas en `supabase-config.js`
2. Asegúrate de que la tabla `news` existe en Supabase
3. Confirma que el bucket `news-images` está configurado como público
4. Revisa la consola del navegador (F12) para ver errores

¡Ya estás listo para gestionar las noticias de Clínica Chinita! 🎉
