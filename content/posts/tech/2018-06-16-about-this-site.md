---
title: markdownで書いた記事をNuxt.js + MDLでレンダリングするSPAブログを立ち上げました
created: 2018-06-16
---

## 経緯

技術ブログを以前から書いておきたいと思っていました:neutral_face:

ちょっと調べた:mag:だけで素晴らしいサイト、仕組み(はてなブログやCMS、JekyllやHugoといったSSG等)は多数見つかったのですが:eyes:

N番煎じ:tea:ながらも自分で１から作成したいと思い起ち、作成するに至りました。

(絵文字対応したので、ここぞとばかりに多用しています:smile:)

## 何故思い起ったのか

- Nuxt.jsに触れてみたかった

    Javaのサーバサイドエンジニアなので意図して触れない限り疎遠なフロントエンドの世界:open_mouth:

    最近様々なJSフレームワークが台頭してるようですが、その内の一つ、Vue.jsに触れたことがなかったので触ってみようと思いました。

- サイトを1から組む体験がしたかった

    レイアウトや仕組み等、1から自分で考えて作ったものでないと愛着がわかない性格なのと、自分で組み上げ、公開する体験がしたかったから、してみよう、と:point_up:

## 実現した事(当サイトの仕組み)

1. Markdownで記事を書く

    [processmd](https://www.npmjs.com/package/processmd)を使用しました。

    サマリファイル出力や見出し作成機能が非常に便利:exclamation:だが…(後述)

1. Nuxt.jsの動的ルーティングで自動収集

1. Nuxt.jsの静的ファイル生成で静的な形にする

1. GithubPagesにホスティング

1. ついでにサイトマップ出力・PWA対応も取り組んでいます。

## 引っかかった事

- Nuxt.jsわからん問題

    Vuexやnuxt.config.jsの記法等々で悩まされました。これについては経験値をあげるしかない:cold_sweat:

- GithubPagesへのデプロイ問題

    - 何故かmanifest.js等々を読み込まん:anger:

        build時にdistに作成される.nojekyllファイルが必要だったというたった1つの過ちに行き着くまでに軽く1,2時間は費やした。。。

        StackOverflowにそのままズバリなページがあって非常に助かりました。

        https://stackoverflow.com/questions/49986185/github-pages-error
- Markdownのリンクが有効にならない

    この記事を書いてて気づいたのですが、リンクの記載があってもただの文字列として変換されてしまっていました:unamused:
    
    そして、processmdのオプションでpreset名を与えても有効にできる手段が見つからず。。

    結局レンダリング時にmarkdown-itを呼び直して自前でやっています。こんな感じに。

    ```javascript
    asyncData({params}){
        const moduleUrl = params.path.replace(/_/g, '/') + '/' + params.url;
        const post = Object.assign({}, require(`~/${moduleUrl}.json`), moduleUrl);
        const md = require('markdown-it')({linkify: true}).use(require('markdown-it-highlightjs'));
        post.parseHtml = md.render(post.bodyContent); // 意味ねぇ！
        return post;
    },
    ```

## 今後の展望

- 記事のカテゴリ化

    ページ右側が寂しいので、そこにカテゴリ一覧の表示をしたい

- 記事の充実

    ソーシャル活動を今まで一切して来ていないせいで、記事を書く労力がすごい(語彙)。

## 参考にさせて頂いたページ

- https://jmblog.jp/posts/2018-01-17/build-a-blog-with-nuxtjs-and-markdown-1/
- https://qiita.com/ainehanta/items/8918593f3a28dfb25ddf
