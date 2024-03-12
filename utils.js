const sendFile = async (item, ctx) => {
  if (item) {
    try {
      await ctx.replyWithDocument(item);
    } catch (e) {
      ctx.replyWithMarkdown(
        `ERROR ${e.message}\n\nBypassed url [here](${item})\n\nCheck your link or the file may be too large`,
      );
    }
  }
};

module.exports = {
  sendFile,
};
