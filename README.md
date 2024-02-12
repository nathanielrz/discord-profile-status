# Discord Profile Status
Available statuses:
- offline
- online
- idle
- do-not-disturb

### Installing the package

```bash
npm i discord-profile-status
```
OR
```bash
yarn add discord-profile-status
```

### Using

1. Import in React
```typescript
import { Profile } from "discord-profile-status";
```
2. Adding status and image
```typescript

export default function App() {
  return <Profile status="do-not-disturb" image="./nathanielrz.png"></Profile>;
}
```
3. Output

![image](https://github.com/nathanielrz/discord-profile-status/assets/131909495/7e39f45d-2890-4776-b6bc-9c08fdee2fb0)

### Development
1. Edit src/Profile.tsx
2. Send a pull request
3. Bundling for preview: `npm run build`
