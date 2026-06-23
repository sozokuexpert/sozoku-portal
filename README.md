# 終活・相続サポートセンター — GitHub Pages サイト

一般社団法人相続手続士業の会が運営する、終活・相続のワンストップポータルサイトです。

---

## 📁 ファイル構成

```
souzoku-portal/
├── index.html       ← メインページ（全コンテンツ）
├── style.css        ← スタイルシート（カスタマイズ変数あり）
├── script.js        ← アコーディオン・フェードイン等
├── images/
│   ├── logo.png         ← ロゴ画像（後日差替）
│   ├── line1.png        ← 相続手続士業の会 公式LINE QRコード
│   ├── line2.png        ← なかよしこ LINE QRコード
│   ├── favicon.ico      ← ファビコン（後日差替）
│   ├── apple-touch-icon.png  ← Appleアイコン（後日差替）
│   └── ogp.png          ← OGP画像（後日差替、推奨: 1200×630px）
└── README.md
```

---

## 🚀 GitHub Pages への公開手順

1. このフォルダをそのまま GitHub リポジトリにプッシュ
2. リポジトリの **Settings → Pages** を開く
3. Source を `main` ブランチ、ルート（`/`）に設定して **Save**
4. 数分後に `https://[your-username].github.io/[repo-name]/` で公開される

---

## 🔧 後日作業チェックリスト

### コンテンツ更新（index.html）

| 項目 | 場所 | 内容 |
|------|------|------|
| OGP URL | `<meta property="og:url">` | 実際のURL に変更 |
| OGP 画像 URL | `<meta property="og:image">` | 実際のURL に変更 |
| カード①リンク | Card 1 の `<a href="#">` | 遺産分割協議書作成アプリURL |
| カード②リンク | Card 2 の `<a href="#">` | 終活リーガルクリニックURL |
| カード③リンク | Card 3 の `<a href="#">` | 相続税シミュレーションURL |
| カード④リンク | Card 4 の `<a href="#">` | 無料相談URL |
| 所在地 | `.about-contacts` 内 | 実際の住所 |
| 電話番号 | `.about-contacts` 内 | 実際の電話番号（tel:xxx形式も推奨）|
| メール | `.about-contacts` 内 | 実際のメールアドレス |
| ホームページURL | `.about-contacts` 内 | 実際のURL |
| 免責事項施行日 | `附則` | 令和〇年〇月〇日 → 実際の日付 |

### 画像ファイル（images/ フォルダ）

| ファイル名 | 仕様 |
|-----------|------|
| `logo.png` | 推奨: 横長、高さ 56px 相当、透過PNG |
| `line1.png` | LINEのQRコード、推奨: 300×300px以上 |
| `line2.png` | LINEのQRコード、推奨: 300×300px以上 |
| `favicon.ico` | 32×32px または 64×64px |
| `apple-touch-icon.png` | 180×180px |
| `ogp.png` | 1200×630px |

---

## 🎨 他社向けカスタマイズ（葬儀社・不動産会社）

**`style.css` の先頭にある `:root` 変数を変更するだけ**でブランドカラーを変更できます。

```css
:root {
  /* === ブランドカラー（ここだけ変える） === */
  --brand-bg:          #f7faf7;   /* ページ背景 */
  --brand-main:        #6abf69;   /* メインカラー */
  --brand-main-dark:   #57a657;   /* メインカラー（暗め） */
  --brand-sub:         #d7f5cb;   /* サブカラー（薄い） */
  --brand-btn:         #4caf50;   /* ボタン背景 */
  --brand-btn-hover:   #388e3c;   /* ボタンホバー */
  --brand-accent:      #2e7d32;   /* アクセントカラー */
  --brand-footer-bg:   #6abf69;   /* フッター背景 */
  --brand-footer-text: #ffffff;   /* フッター文字色 */
}
```

### カスタマイズ例

#### 葬儀社（落ち着いたネイビー系）
```css
--brand-bg:        #f5f6fa;
--brand-main:      #4a6fa5;
--brand-main-dark: #365480;
--brand-sub:       #dce8f5;
--brand-btn:       #4a6fa5;
--brand-btn-hover: #365480;
--brand-accent:    #1e3a5f;
--brand-footer-bg: #1e3a5f;
```

#### 不動産会社（温かみのあるオレンジ系）
```css
--brand-bg:        #fdf8f3;
--brand-main:      #e07b39;
--brand-main-dark: #c0622a;
--brand-sub:       #fdecd8;
--brand-btn:       #e07b39;
--brand-btn-hover: #c0622a;
--brand-accent:    #8c3f10;
--brand-footer-bg: #8c3f10;
```

---

## 📱 対応環境

- **PC**: Chrome / Firefox / Edge / Safari（最新版）
- **スマートフォン**: iOS Safari / Android Chrome
- **外部ライブラリ**: 不使用（CDNなし、完全ローカル動作）
- **JavaScript**: オプション（無効でも基本表示は可能）

---

## 📝 更新履歴

| 日付 | 内容 |
|------|------|
| 初版作成 | GitHub Pages 公開用初期リリース |

---

© 一般社団法人相続手続士業の会
