# ToastedUI

A lightweight, customizable toast notification system for React applications.

## Features

- 🚀 Lightweight and fast
- 🎨 Fully customizable
- 🔄 Multiple toast types (info, success, warning, error)
- 📱 Responsive and mobile-friendly
- ⏱️ Configurable durations
- 🌈 Sleek animations
- 📦 Easy to install and use
- 🔧 TypeScript support

## Installation

```bash
npm install @toastedui
# or
yarn add @toastedui
```

## Usage

### 1. Wrap your app with the ToastProvider

```jsx
import { ToastProvider } from '@toastedui';

function App() {
  return (
    <ToastProvider>
      <YourApp />
    </ToastProvider>
  );
}
```

### 2. Add the ToastContainer to your layout

```jsx
import { ToastContainer } from '@toastedui';

function Layout() {
  return (
    <div>
      {/* Your app content */}
      <ToastContainer position="top-right" limit={5} />
    </div>
  );
}
```

### 3. Use the useToast hook to show toasts

```jsx
import { useToast } from '@toastedui';

function MyComponent() {
  const toast = useToast();

  const handleClick = () => {
    toast.success('Operation completed successfully!', {
      title: 'Success',
      duration: 5000,
    });
  };

  return (
    <button onClick={handleClick}>
      Show Toast
    </button>
  );
}
```

## API

### ToastProvider

The provider that makes the toast functionality available throughout your app.

```jsx
<ToastProvider>
  {children}
</ToastProvider>
```

### ToastContainer

The container that renders the toasts.

```jsx
<ToastContainer
  position="top-right" // 'top-right', 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center'
  limit={5} // Maximum number of toasts to show at once
  newestOnTop={true} // Whether to show newest toasts on top
  className="" // Additional CSS classes
  style={{}} // Additional inline styles
/>
```

### useToast Hook

```jsx
const toast = useToast();

// Show a toast with default options
toast.show('Message');

// Show a toast with type
toast.info('Info message');
toast.success('Success message');
toast.warning('Warning message');
toast.error('Error message');

// With options
toast.success('Message', {
  title: 'Optional Title',
  duration: 5000, // milliseconds
  icon: <CustomIcon />, // Custom icon component
  onClose: () => console.log('Toast closed'),
});

// Remove a specific toast
const id = toast.success('Message');
toast.remove(id);

// Clear all toasts
toast.clearAll();
```

## Customization

### Custom Styles

You can customize the appearance of toasts by providing additional CSS classes or inline styles.

```jsx
<ToastContainer className="my-custom-container" />
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
