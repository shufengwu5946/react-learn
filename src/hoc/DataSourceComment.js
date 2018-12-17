let DataSourceComment = {

    comments: [
        {
            comment: {
                text: 'comment1',
                id: 1
            }
        },
        {
            comment: {
                text: 'comment2',
                id: 2
            }
        },
        {
            comment: {
                text: 'comment3',
                id: 3
            }
        }
    ],
    getComments() {
        return this.comments;
    },
    setComments() {
        this.comments = [

            {
                comment: {
                    text: 'comment2',
                    id: 2
                }
            },
            {
                comment: {
                    text: 'comment3',
                    id: 3
                }
            }
        ]
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

export default DataSourceComment;