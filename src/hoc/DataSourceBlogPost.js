let DataSourceBlogPost = {

    blogs: [
        "blog1",
        "blog2",
        "blog3",
        "blog4"
    ],
    getBlog(index) {
        return this.blogs[index];
    },
    setBlog(index,content) {
        this.blogs[index] = content;
        this.func();
    },
    addChangeListener(func){
        this.func = func;
    },
    removeChangeListener(func){
        this.func = null;
    },
    func:null
}

export default DataSourceBlogPost;