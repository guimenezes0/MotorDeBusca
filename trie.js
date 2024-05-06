class TrieNode {
    constructor() {
        this.end = false;
        this.children = {};
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word, originalWord) {
        let node = this.root;
        for(let i = 0; i < word.length; i++) {
            if(!node.children[word[i]]) {
                node.children[word[i]] = new TrieNode();
            }
            node = node.children[word[i]];
        }
        node.end = true;
        node.word = originalWord;
    }

    search(word) {
        let node = this.root;
        for(let i = 0; i < word.length; i++) {
            if(!node.children[word[i]]) {
                return [];
            }
            node = node.children[word[i]];
        }
        return this.dfs(node);
    }

    dfs(node) {
        let res = [];
        if(node.end) {
            res.push(node.word);
        }
        for(let child in node.children) {
            res = res.concat(this.dfs(node.children[child]));
        }
        return res;
    }
}

module.exports = Trie;
