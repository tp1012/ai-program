// EmailJS Configuration
// セットアップ手順:
// 1. https://www.emailjs.com/ で無料アカウントを作成
// 2. Email Services からメールサービス（Gmail等）を追加して Service ID を取得
// 3. Email Templates でテンプレートを作成して Template ID を取得
//    テンプレートの「To Email」欄に {{to_email}} を設定
//    本文で使える変数: {{to_email}}, {{game_title}}, {{member_count}}
// 4. Account > General > Public Key を取得
window.emailjsConfig = {
    publicKey: 'YOUR_PUBLIC_KEY',
    serviceId: 'YOUR_SERVICE_ID',
    templateId: 'YOUR_TEMPLATE_ID',
};
