class TreeNode {
  constructor(val) {
    this.val = val
    this.isWord = false;
    this
  }
}


const trie = new Trie();
trie.insert("apple");
trie.search("apple"); // 返回 true
trie.search("app"); // 返回 false
trie.startsWith("app"); // 返回 true
trie.insert("app");
trie.search("app"); // 返回 true