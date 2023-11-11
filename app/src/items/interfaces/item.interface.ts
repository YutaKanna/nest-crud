export interface Item {
    id?: string;  // アイテムの一意識別子。作成時にはオプショナル。
    title: string;  // アイテムのタイトル。
    description: string;  // アイテムの詳細説明。
    price: string;  // アイテムの価格。
}
