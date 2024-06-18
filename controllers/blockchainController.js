const BlockNumController = {
    create: async (props) => {
        const { id, latestBlock } = props;
        var command =
            "INSERT INTO blocknumber (id , latestBlock ) VALUES (?, ?)";
        var result = await global.sql.query(command, [id, latestBlock]);
        return result;
    },

    find: async (props) => {
        const { id } = props;
        var command = "SELECT * FROM blocknumber WHERE id = ?";

        const result = await global.sql.query(command, [id]);
        return result;
    },

    update: async (props) => {
        const { id, latestBlock } = props;
        var command = "UPDATE blocknumber SET latestBlock = ? WHERE id = ?";

        const result = await global.sql.query(command, [latestBlock, id]);
        return result;
    },
};

module.exports = { BlockNumController };
