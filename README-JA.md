# NOVI v9 – A Calmer Way / LUXE inbox revision

変更箇所は `#calm-build` のみ（ピンク波リボンSVGを保持）。その他のセグメント、Hero、ナビ、グローバルCSSは変更していません。

- 旧calm-buildの2カラムCSS・後付け800px!important上書きを撤去。`assets/css/novi-calm-luxe.css`に統一。
- 幅1120pxの立体感あるINBOX、深緑グラデーション＋金、ネイビーの見出し、ダスティピンクの通知。
- メール到着アニメーション（5通、未読件数1→5、1回自動再生＋手動Replay）。JavaScriptまたはアニメーション非対応／動きを減らす設定では5通全部を静的に表示。
- 文字の意味に沿うメリハリを整理。3つのNo fear / No jargon / No pressureのアイコンは元のSVGパスを保持。
- Page Speed / SEO&AEO / marketing-led design & content / Google Business ProfileをNOVIの価値として明記。
- 本番計測は実際の公開ホスティング先でLighthouseを別途実施してください。

ダウンロードZIPはindex.htmlを開けば基本の表示は確認できます。アニメーションはINBOXが見える位置までスクロールすると始まり、丸い矢印で再生できます。
