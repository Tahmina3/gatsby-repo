import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import MainMenuPreview from './preview-templates/MainMenuPreview'
import TakeawayMenuPreview from './preview-templates/TakeawayMenuPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import MealDealsPreview from './preview-templates/MealDealsPreview'
import DialACurryPreview from './preview-templates/DialACurryPreview'
import ContactPreview from './preview-templates/ContactPreview'


CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('mainmenu', MainMenuPreview)
CMS.registerPreviewTemplate('takeawaymenu', TakeawayMenuPreview)
CMS.registerPreviewTemplate('mealdeals', MealDealsPreview)
CMS.registerPreviewTemplate('dialacurry', DialACurryPreview)
CMS.registerPreviewTemplate('contact', ContactPreview)