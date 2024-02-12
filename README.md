# Discord Profile Status

### Installing

```bash
npm i discord-profile-status
```

### Using

1. Import in React
```typescript
import { Profile } from "discord-profile-status";
```
2. Adding status and image
```typescript
export default function App() {
  return <Profile status="offline/online/idle/do-not-disturb" image="./nathanielrz.png"></Profile>;
}
```