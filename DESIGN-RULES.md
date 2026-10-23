# NOVI Creative Studio — Responsive Design System v1

既存のv296ビジュアルを残したまま、HTMLのセマンティック階層とCSSの共通設計を整理した更新版。

## ファイル構成と読み込み順
1. `assets/css/styles.css` — 元のデザイン（無変更）
2. `assets/css/responsive.css` — 前回作成のレスポンシブ調整（無変更）
3. `assets/css/design-system.css` — 今回追加した見出し・セグメント・境界ルール

`index.html` と `404.html` に 3 の読み込みを追加済みです。

## セグメント
- `novi-segment--editorial` = 既存 `segment-type-a`：広い余白・主メッセージ
- `novi-segment--compact` = 既存 `segment-type-b`：比較・補足
- `novi-segment--bridge` = 既存 `segment-type-ab`：間をつなぐ補足
- `novi-segment--feature` = 既存 `segment-type-c`：ブランド特設セクション
- `novi-segment--custom` = 既存の個別アートディレクションを尊重
- `novi-surface--ivory/warm/rose/deep` = 背景の色温度の意味を明示。既存の `bg-*` グラデーションを使用。

### セクション間の境界
- `novi-transition--wave` = SVG波線。旧 `novi-story-divider` を維持。
- `novi-transition--ribbon` = 画像リボン。旧 `trust-top-wave`、`familiar-top-band` を維持。
- 装飾を使わない隣接セクションは、色面と余白で区切る。無意味な波や線は自動追加しない。
- 境界のルールとセグメントの余白ルールは分離する。

## 見出しレベル
- H1：ページの主メッセージ（ホームはヒーローに１つだけ）
- H2：各セクションの見出し（Servicesはスクリーンリーダー対応の見出しを追加）
- H3：カードやセクション内の小見出し（元H2だったサービスカード4件を修正）
- H4：H3配下のアイテム見出し
- HTMLの各見出しには `novi-type novi-type--hN` を付与。
- サイズの基準は `design-system.css` 冒頭のCSS変数に集約。
- 文字の色やゴールド強調、リボン／イラストのアートディレクションは保持。
- `styles.css` には高詳細度の `!important` 指定が多数あるため、特定セクションの意図的な特例は維持される。完全一律サイズではなく共通基準と例外の構成。

## レスポンシブ確認リスト
- 320、360、375、390、430、480、768、1024、1280、1440、1920px幅
- iPhone縦横、Android長文折返し、200%ズーム
- メニュー開閉、CTAリンク、見出し改行、横スクロールなし
- trust見出しの斜体、波線、色境界、リボン、重なりカード
- reduced-motion、有効なフォーカス移動、404画面

## 実行済みの検査範囲
- HTML見出し階層・CSS参照・ローカルリソースの整合性を静的検査。
- Headless Chromium はローカルHTTP/FILE直接表示が制限されているため、CSSと画像をデータとして埋め込んだオフライン表示テストを実施。320 / 360 / 390 / 430 / 480 / 600 / 768 / 900 / 1024 / 1200 / 1440 / 1920px を確認。
- 実Google Fontsの読み込み、実機ブラウザ、タッチ挙動までは再現していません。実機表示の無欠陥保証はしていません。
