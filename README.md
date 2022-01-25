# Mongoose-Nest

## ディレクトリを細かく分ける理由

- Single Responsibility Principle に準拠

## 実装における注意点

- Schema のプロパティは閉じていないため、実装者が DDD に準拠した実装になっているか気にしながら実装する必要がある（ここを守ることが DDD において最も肝要）
- Service 層意外で Schema（ビジネスロジックを持つオブジェクト）が流出しないことを意識する。(Controller 層に Schema を直接渡さない)
- domains/services/< domain > が最も実装判断が難しいが、イメージは domains/schemas/< domain > に実装すると不自然なメソットをここに実装する
  - scene1. repository にアクセスする必要があるメソッド (重複チェック)
  - scene2. 別 Domain を絡めた処理 ( Room と User という 2 つのドメインが絡み、Room の上限チェックなど )
