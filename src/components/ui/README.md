UI Primitives
=================

This folder contains small, focused UI primitives used across the site. Each component follows the same API patterns:

- PascalCase component name
- `variant` and `size` props where applicable
- Forward native HTML attributes (e.g., `...rest`)

Current primitives:

- `Button` — `button.tsx` — Variants: `primary|secondary|ghost|link`, Sizes: `sm|md|lg`.

Usage example:

```tsx
import { Button } from "src/components/ui/button";

<Button variant="primary" size="md" onClick={() => {}}>Request demo</Button>
```

Accessibility notes:
- Buttons expose native `disabled` behavior.
- All interactive primitives should ensure `focus-visible` styles are present.

When adding new primitives, document the props and include a small code example here.
