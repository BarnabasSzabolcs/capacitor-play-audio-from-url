# capacitor-play-audio-from-url

This capacitor plugin plays audio natively from a remote url.

## Install

```bash
npm install capacitor-play-audio-from-url
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`play(...)`](#play)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### play(...)

```typescript
play(options: PlayOptions) => Promise<void>
```

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code><a href="#playoptions">PlayOptions</a></code> |

--------------------


### Interfaces


#### PlayOptions

| Prop      | Type                |
| --------- | ------------------- |
| **`url`** | <code>string</code> |

</docgen-api>


# Useful (but not necessary) commands

```bash
cd android
./gradlew clean
./gradlew build
./gradlew assembleDebug
./gradlew assembleRelease
```

```bash
cd ios/App
pod install
```

To test, it is best to link it to a project using
```bash
npm install <path-to-the-project>
```
Then lots of npx cap sync and npx cap copy for good measure.:)