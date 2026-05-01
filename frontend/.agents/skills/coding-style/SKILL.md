---
name: smartstation-coding-style
description: Dự án SmartStation Frontend Coding Style Guide (NativeWind, i18n, Component Patterns).
---

## 📋 Mục đích

Hướng dẫn này định nghĩa các tiêu chuẩn mã nguồn, cấu trúc dự án, và các thực hành tốt nhất cho dự án SmartStation Frontend. Mục tiêu:

1. **Rõ ràng & Mạch lạc**: Code dễ đọc, dễ hiểu
2. **Tái sử dụng tối đa**: Reusable components, hooks
3. **Cấu hình hóa**: Tránh hardcode, sử dụng config files
4. **Quốc tế hóa (i18n)**: Tất cả text được quản lý qua i18n
5. **Component-driven**: Chia nhỏ thành các components tối ưu
6. **Design system**: Tất cả components phải tuân theo design system.

---

## 🏗️ Cấu trúc Thư mục

```
app/
├── _layout.tsx                 # Root layout & navigation
├── (tabs)/                     # Tab-based routes
assets/                         # Images, icons, static files
components/                     # Reusable UI components
├── ui/                         # Base UI components
├── form/                       # Form components
└── layout/                     # Layout wrappers
hooks/                          # Custom React hooks
constants/                      # Constants & configuration
├── theme.ts                    # Theme configuration
├── config.ts                   # App configuration
└── i18n.ts                     # i18n resources
config/                         # Runtime/build configuration
├── env.ts                      # Environment variables
└── theme.config.ts             # Theme extension / mapping
modules/                        # Feature modules (mỗi module = 1 screen/flow)
└── homepage/                   # Example module
  └── homepage.tsx
```

---

## 🎯 Nguyên tắc Phát triển

### 0. ESLint & Function Style

- Dự án đang dùng `ESLint 9` (xem `package.json`: `eslint@^9.25.0`)
- Bắt buộc style hàm: ưu tiên `const` + arrow function
- Không dùng `function declaration` cho exported function, component, hook
- tên file sẽ sạng lower-case

#### ✅ Tốt

```tsx
export const PaymentModule = () => {
  return <View />;
};

export const useStation = (stationId: string) => {
  return { stationId };
};
```

#### ❌ Không tốt

```tsx
export function PaymentModule() {
  return <View />;
}

export function useStation(stationId: string) {
  return { stationId };
}
```

### 1. Code Clarity (Rõ ràng)

#### ✅ Tốt

```tsx
// Tên biến rõ ràng, miêu tả chính xác
const userNameError = validateUserName(userName);
const isFormValid = checkFormValidity(formData);

// Type definitions rõ ràng
interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  createdAt: Date;
}
```

#### ❌ Không tốt

```tsx
// Tên không rõ ràng
const err = validateName(nm);
const valid = check(data);

// Không có types
const user = { id: 1, name: 'John', created: new Date() };
```

---

### 2. Component Reusability (Tái sử dụng)

#### Structure Pattern

```tsx
// components/ui/Button.tsx
import { Pressable, Text, View } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  onPress: () => void;
  title: string;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

export function Button({
  onPress,
  title,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
}: ButtonProps) {
  const baseStyles = 'rounded-lg font-semibold justify-center items-center';

  const variantStyles = {
    primary: 'bg-blue-600 active:bg-blue-700',
    secondary: 'bg-gray-300 active:bg-gray-400',
    danger: 'bg-red-600 active:bg-red-700',
  };

  const sizeStyles = {
    sm: 'px-3 py-2',
    md: 'px-4 py-3',
    lg: 'px-6 py-4',
  };

  const sizeTextStyles = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className={twMerge(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        disabled && 'opacity-50',
        className,
      )}
    >
      <Text className={twMerge('text-white', sizeTextStyles[size])}>{title}</Text>
    </Pressable>
  );
}
```

#### Composition Pattern

```tsx
// ✅ Tốt: Sử dụng composition
function UserCard({ user }: { user: User }) {
  return (
    <Card>
      <Avatar source={user.avatar} />
      <UserInfo user={user} />
      <UserActions user={user} />
    </Card>
  );
}

// ❌ Không tốt: Monolithic component
function UserCard({ user }: { user: User }) {
  return (
    <View>
      <Image source={user.avatar} />
      <Text>{user.name}</Text>
      <Text>{user.email}</Text>
      <Button onPress={() => editUser(user.id)} title="Edit" />
      <Button onPress={() => deleteUser(user.id)} title="Delete" />
    </View>
  );
}
```

---

### 3. Configuration-Driven Development

#### Config Pattern

```tsx
// constants/config.ts
export const appConfig = {
  api: {
    baseURL: process.env.EXPO_PUBLIC_API_URL || 'https://api.smartstation.local',
    timeout: 30000,
    retryAttempts: 3,
  },
  cache: {
    ttl: 5 * 60 * 1000, // 5 minutes
  },
  pagination: {
    pageSize: 20,
    maxPages: 100,
  },
} as const;

// Usage in component
import { appConfig } from '@/constants/config';

function DataFetcher() {
  const pageSize = appConfig.pagination.pageSize;
  // ...
}
```

#### Theme Configuration

```tsx
// constants/theme.ts
export const COLORS = {
  primary: {
    50: '#EFF6FF',
    500: '#3B82F6',
    900: '#1E3A8A',
  },
  secondary: {
    50: '#F5F3FF',
    500: '#A78BFA',
    900: '#4C1D95',
  },
  status: {
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
  },
} as const;

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
} as const;

export const TYPOGRAPHY = {
  heading1: { fontSize: 32, fontWeight: '700', lineHeight: 40 },
  heading2: { fontSize: 24, fontWeight: '700', lineHeight: 32 },
  body: { fontSize: 16, fontWeight: '400', lineHeight: 24 },
  caption: { fontSize: 12, fontWeight: '400', lineHeight: 16 },
} as const;
```

---

### 4. i18n - Quốc tế hóa

#### Setup

```tsx
// constants/i18n.ts
export const i18n = {
  vi: {
    common: {
      yes: 'Có',
      no: 'Không',
      ok: 'OK',
      cancel: 'Hủy',
      save: 'Lưu',
      delete: 'Xóa',
      edit: 'Chỉnh sửa',
      loading: 'Đang tải...',
      error: 'Lỗi',
      success: 'Thành công',
    },
    modules: {
      homepage: {
        title: 'Trang chủ',
        welcome: 'Chào mừng bạn',
        description: 'Quản lý nhà thông minh của bạn',
      },
      settings: {
        title: 'Cài đặt',
        language: 'Ngôn ngữ',
        theme: 'Chủ đề',
        notifications: 'Thông báo',
      },
      devices: {
        title: 'Thiết bị',
        noDevices: 'Chưa có thiết bị nào',
        addDevice: 'Thêm thiết bị',
      },
    },
    errors: {
      networkError: 'Lỗi kết nối mạng',
      validationError: 'Dữ liệu không hợp lệ',
      serverError: 'Lỗi máy chủ',
    },
  },
} as const;

export type I18nKeys = typeof i18n.vi;
```

#### Custom Hook

```tsx
// hooks/useTranslation.ts
import { i18n } from '@/constants/i18n';

type I18nValue = typeof i18n.vi;

export function useTranslation() {
  // Future: Thêm logic để switch language
  const currentLanguage = 'vi';
  const translations = i18n[currentLanguage];

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations;

    for (const k of keys) {
      value = value?.[k];
    }

    return typeof value === 'string' ? value : key;
  };

  return { t, translations };
}
```

#### Usage in Components

```tsx
// modules/homepage/homepage.tsx
import { useTranslation } from '@/hooks/useTranslation';

export function HomepageModule() {
  const { t } = useTranslation();

  return (
    <View className="flex-1 p-4">
      <Text className="text-2xl font-bold">{t('modules.homepage.title')}</Text>
      <Text className="text-gray-600">{t('modules.homepage.description')}</Text>
      <Button title={t('common.save')} onPress={() => {}} />
    </View>
  );
}
```

---

### 5. Component Splitting Best Practices

#### Rule: Single Responsibility Principle

```tsx
// ✅ Tốt: Mỗi component có một trách nhiệm

// components/layout/ScreenContainer.tsx
export function ScreenContainer({ children }: { children: React.ReactNode }) {
  return <SafeAreaView className="flex-1 bg-white dark:bg-black">{children}</SafeAreaView>;
}

// components/layout/Header.tsx
interface HeaderProps {
  title: string;
  showBack?: boolean;
  onBackPress?: () => void;
}

export function Header({ title, showBack, onBackPress }: HeaderProps) {
  return (
    <View className="flex-row items-center justify-between p-4 bg-blue-600">
      {showBack && (
        <Pressable onPress={onBackPress}>
          <Icon name="chevron-left" size={24} color="white" />
        </Pressable>
      )}
      <Text className="flex-1 text-white font-bold text-lg text-center">{title}</Text>
      <Pressable>
        <Icon name="menu" size={24} color="white" />
      </Pressable>
    </View>
  );
}

// components/layout/Footer.tsx
export function Footer() {
  return (
    <View className="flex-row justify-around p-4 border-t border-gray-300">
      <NavButton label="Home" icon="home" />
      <NavButton label="Search" icon="search" />
      <NavButton label="Profile" icon="user" />
    </View>
  );
}

// modules/homepage/homepage.tsx
export function HomepageModule() {
  return (
    <ScreenContainer>
      <Header title="Trang chủ" />
      <ScrollView className="flex-1">{/* Main content */}</ScrollView>
      <Footer />
    </ScreenContainer>
  );
}
```

#### Breakdown Logic

```tsx
// ❌ Không tốt: Component quá lớn (300+ lines)
function ComplexUserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  // ... 50 more lines of state

  // ... complex validation logic (100 lines)
  // ... form submission logic (50 lines)
  // ... error handling (30 lines)

  return (
    <View>
      {/* Render 200+ lines of JSX */}
    </View>
  );
}

// ✅ Tốt: Chia nhỏ thành các component con
function UserFormField({
  label,
  value,
  onChange,
  error,
  type = 'text'
}: UserFormFieldProps) {
  return (
    <View>
      <Label text={label} />
      <TextInput
        value={value}
        onChangeText={onChange}
        keyboardType={type === 'email' ? 'email-address' : 'default'}
      />
      {error && <ErrorText text={error} />}
    </View>
  );
}

function UserFormSection({
  data,
  onChange
}: UserFormSectionProps) {
  return (
    <View className="gap-4">
      <UserFormField
        label="Họ tên"
        value={data.name}
        onChange={(name) => onChange({ ...data, name })}
        error={data.errors?.name}
      />
      <UserFormField
        label="Email"
        type="email"
        value={data.email}
        onChange={(email) => onChange({ ...data, email })}
        error={data.errors?.email}
      />
    </View>
  );
}

function UserForm() {
  const [formData, setFormData] = useState<UserFormData>({...});
  const errors = validateUserForm(formData);

  const handleSubmit = async () => {
    if (Object.keys(errors).length > 0) return;
    await submitUserForm(formData);
  };

  return (
    <View className="flex-1 p-4">
      <UserFormSection
        data={{ ...formData, errors }}
        onChange={setFormData}
      />
      <Button
        title="Lưu"
        onPress={handleSubmit}
      />
    </View>
  );
}
```

---

## 📚 Custom Hooks Pattern

### Fetch Hook

```tsx
// hooks/useFetch.ts
interface UseFetchOptions {
  immediate?: boolean;
  cacheTime?: number;
}

export function useFetch<T>(url: string, options: UseFetchOptions = {}) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetch = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get<T>(url);
      setData(response);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error'));
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    if (options.immediate !== false) {
      fetch();
    }
  }, [fetch, options.immediate]);

  return { data, loading, error, refetch: fetch };
}
```

### Form Hook

```tsx
// hooks/useForm.ts
export function useForm<T extends Record<string, any>>(
  initialValues: T,
  onSubmit: (values: T) => Promise<void>,
) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const setFieldValue = useCallback((field: keyof T, value: any) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  }, []);

  const setFieldError = useCallback((field: keyof T, error: string) => {
    setErrors((prev) => ({ ...prev, [field]: error }));
  }, []);

  const handleSubmit = useCallback(
    async (e?: any) => {
      e?.preventDefault?.();
      setIsSubmitting(true);
      try {
        await onSubmit(values);
      } finally {
        setIsSubmitting(false);
      }
    },
    [values, onSubmit],
  );

  return {
    values,
    errors,
    touched,
    isSubmitting,
    setFieldValue,
    setFieldError,
    setFieldTouched: (field: keyof T) => {
      setTouched((prev) => ({ ...prev, [field]: true }));
    },
    handleSubmit,
    reset: () => {
      setValues(initialValues);
      setErrors({});
      setTouched({});
    },
  };
}
```

---

## 🎨 Styling Guidelines (NativeWind + Tailwind)

### Utility Classes

```tsx
// ✅ Tốt: Sử dụng Tailwind utilities
<View className="flex-1 items-center justify-center px-4 py-6 gap-2">
  <Text className="text-2xl font-bold text-gray-900 dark:text-white">
    Hello
  </Text>
</View>

// ❌ Không tốt: Inline styles
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 16, paddingVertical: 24 }}>
  <Text style={{ fontSize: 24, fontWeight: '700', color: '#111827' }}>
    Hello
  </Text>
</View>
```

### Responsive Classes

```tsx
// Sử dụng responsive design với Tailwind
<View className="flex-col md:flex-row gap-4">
  <View className="flex-1 w-full md:w-1/2">{/* Desktop: 50% width, Mobile: 100% width */}</View>
</View>
```

### Dark Mode Support

```tsx
<View className="bg-white dark:bg-gray-900">
  <Text className="text-black dark:text-white">Content</Text>
</View>
```

---

## 📦 Data & Logic Placement

### Rule

```tsx
// Không tạo thư mục services/ hoặc utils/ ở root.
// Đặt logic theo scope:
// 1) constants/: static config + static data + i18n
// 2) hooks/: reusable business logic
// 3) modules/<feature>/: logic và component đặc thù của feature đó
```

### Example: Feature-local data helpers

```tsx
// modules/homepage/helpers.ts
import { appConfig } from '@/constants/config';

export async function fetchHomepageData() {
  const response = await fetch(`${appConfig.api.baseURL}/homepage`);
  if (!response.ok) throw new Error('Failed to fetch homepage data');
  return response.json();
}
```

### Example: Reusable formatting in hooks

```tsx
// hooks/useCurrency.ts
export function useCurrency() {
  const formatCurrency = (value: number, currency = 'VND') => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency,
    }).format(value);
  };

  return { formatCurrency };
}
```

---

## 📝 Type Definitions

```tsx
// types/common.ts
export interface PaginationResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, any>;
}

// types/models.ts
export interface Device {
  id: string;
  name: string;
  type: 'light' | 'thermostat' | 'lock' | 'camera';
  status: 'online' | 'offline';
  lastUpdated: Date;
}

export interface Room {
  id: string;
  name: string;
  devices: Device[];
}

export interface User {
  id: string;
  email: string;
  fullName: string;
  avatar?: string;
  preferences: {
    language: 'vi' | 'en';
    theme: 'light' | 'dark' | 'auto';
    notifications: boolean;
  };
}
```

---

## ✅ Code Review Checklist

- [ ] Code rõ ràng, dễ đọc, có naming tốt
- [ ] Không có hardcode value, sử dụng config
- [ ] Tất cả text sử dụng i18n (`t()` function)
- [ ] Component được chia nhỏ hợp lý (< 300 lines)
- [ ] Có TypeScript types đầy đủ (no `any`)
- [ ] Sử dụng reusable components thay vì lặp code
- [ ] Tailwind classes thay vì inline styles
- [ ] Error handling đầy đủ
- [ ] Performance optimizations (useMemo, useCallback khi cần)
- [ ] Đã test component/hook (nếu có test)

---

## 🚀 Best Practices

1. **Lazy Loading**: Sử dụng React.lazy() cho heavy components
2. **Memoization**: Sử dụng React.memo() cho components nhận các props phức tạp
3. **State Management**: Sử dụng custom hooks cho state logic
4. **Error Boundaries**: Wrap components với error boundary
5. **Loading States**: Luôn hiển thị loading state khi fetch data
6. **Empty States**: Xử lý trường hợp không có data
7. **Skeleton Loading**: Sử dụng skeleton screens thay vì plain loading spinners
8. **Accessibility**: Sử dụng semantic components và labels
9. **Performance**: Tránh inline functions, optimize re-renders
10. **Documentation**: Thêm JSDoc comments cho public functions

---

## 📞 Contact & Questions

Nếu có câu hỏi về style guide, vui lòng tạo issue hoặc liên hệ với team lead.
