Absolutely! That's a brilliant idea for driving conversions. The announcement bar is perfect for a prominent call-to-action. Here's how to add it to your `_quarto.yml`:## Alternative Styles You Can Try:

### Option 1: More Prominent with Warning Style
```yaml
website:
  announcement:
    icon: phone
    dismissable: true
    content: "**New patients welcome!** Call **(213) 495-1155** or [**Schedule Online**](contact/index.qmd#online-inquiry){.btn .btn-warning .btn-sm}"
    type: warning
    position: below-navbar
```

### Option 2: Success Style (Green Theme)
```yaml
website:
  announcement:
    icon: clipboard-check
    dismissable: true
    content: "**Expert ADHD & Learning Disability Assessments** — [**Get Started**](contact/index.qmd#online-inquiry){.btn .btn-success .btn-sm .ms-2}"
    type: success
    position: below-navbar
```

### Option 3: Dark Theme to Match Your Brand
```yaml
website:
  announcement:
    icon: brain
    dismissable: true
    content: "**Comprehensive Neuropsychological Evaluations** — [**Schedule Consultation**](contact/index.qmd#online-inquiry){.btn .btn-outline-light .btn-sm .ms-2}"
    type: dark
    position: below-navbar
```

## Icon Options:
- `calendar-check` - scheduling theme
- `phone` - phone/contact theme  
- `clipboard-check` - assessment theme
- `brain` - if available, fits your practice
- `info-circle` - informational
- `bell` - attention-grabbing

## Button Style Options:
- `.btn-light` - light button
- `.btn-warning` - yellow/orange button
- `.btn-success` - green button
- `.btn-outline-light` - outlined button

The announcement will appear on every page, giving you consistent lead generation across your entire site. Users can dismiss it, but it'll be the first thing they see!

Which style feels right for your practice?
