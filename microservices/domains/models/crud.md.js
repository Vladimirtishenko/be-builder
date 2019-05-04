class Model {

    create(params) {
        const model = this.model,
              obj = new model(params);

        return obj.save()
            .then(opt => (opt))
            .catch(err => {
                throw err;
            });

  }

  read(params = {}) {
    if(!params) throw 'Params were not received';

    const model = this.model;

    return model.findOne(params).sort({ _id: -1 })
      .then(item => (item))
      .catch(err => {
        throw err;
      });
  }

  readAll(params) {
      if(!params) throw 'Params were not received';

      const model = this.model;

      return model.find(params).sort({ _id: -1 })
        .then(item => (item))
        .catch(err => {
          throw err;
        });

  }

  update() {}

  deleteMany(params = {}) {
      const model = this.model;

      return model.deleteMany(params)
      .then(item => (item))
      .catch(err => {
        throw err;
      });
  }

  insertMany(data){
      if(!data || !Array.isArray(data)) throw 'Data is not valid, this option should be Array.';

      const model = this.model;

      return model.insertMany(data)
      .then(item => (item))
      .catch(err => {
        throw err;
      });
  }

}

module.exports = Model;
