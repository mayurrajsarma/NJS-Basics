## Meta Data
- Meta data
- generateMetaData

- Title
default
template
absolute

## Link

- replace
Overwrites current history entry instead of adding new one, when we go back takes to homepage directly skipping middle routes

## params and searchParams
- param : Like id
- searchParams: sorting and filters
page.tsx has access to both but layout.tsx has only access to params.

## Navigating programmatically
- useRouter
import {useRouter} from next/navigation;
const router = useRouter();
router.push("/")
- redirect
import {redirect} from next/navigation;
redirect("/product")

## loading.tsx
This file helps us to create loading state that users see while waiting for content to load in a specefic route segment.
The loading states appear instantly when navigating, lettiong users know that the application is responsive and actively loading content.
