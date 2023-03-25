const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder, EmbedBuilder, ButtonBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');
const Discord = require('discord.js');
const moment = require("moment");
require("moment-duration-format");

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Get help with the bot'),

  /** 
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */

  run: async (client, interaction, args) => {
    const toUpperCase = (string) => string.charAt(0).toUpperCase() + string.slice(1);
    const commad = (name) => {
      let text = `*To Run Any Command Type*: \`/${name} {Sub Command Name}\``
      let text2 = client.commands.filter(x => x.data.name == name).map((x) => x.data.options.map((c) => '<:purple_arrowright:1079698498846457896> `' + c.name + '` - ' + c.description).join("\n"));
      return text2 + `\n\n` + text
    }
    
    let em1 = new EmbedBuilder()
      .setAuthor({ name: `${client.user.username}\'s Help Menu`, iconURL: client.user.displayAvatarURL({ format: "png" }), url: "https://discord.com/api/oauth2/authorize?client_id=1003269536142856242&permissions=8&scope=bot%20applications.commands" })
      .setImage(`https://share.creavite.co/9knfNjj3wOkbFVx8.gif`)
      .setDescription(`__**Prefix Information**__\nMy Prefix is no longer supported. Please use /help!
You can also mention <@1003269536142856242> to get more information.`)
    //.setThumbnail(`https://cdn.discordapp.com/avatars/943788447980724274/2202ac2b935b8eba95cc96682f18848f.webp?size=1024`)
      .setColor(`#3cb043`)
      .addFields([
        {
          name: "<:categories:1079993999655452702> • Categories [1-9]",
          value: `>>> <:AFK:1089178551636467712> </afk help:1060212623670530210>
          <a:bl_ancmts:1089178793861730395> </announcement help:1060212623670530211>
<a:automod:1078384234986754148> </automod help:1060212623670530212>
<:setup:1089178942688211026> </autosetup help:1060212623670530213>
<a:birthdayy:1074969053266989057> </birthdays help:1060212623670530214>
<a:bot:1089179588883660910> </bot help:1060212623670530215>
<a:Casino:1089179736464441484> </casino help:1060212623670530216>
<:Config:947942292151476254> </config help:1060212623670530218>
<:custom_commands:1089180018686566410> </customcommands help:1080364537208918026>`,
          inline: true
        },
        {
          name: "<:categories:1079993999655452702> • Categories [10-28]",
          value: `>>> <a:botdev:943796174547197952> </developers help:1060212623712456795>
<:economy:1077898499657568276> </economy help:1060212623712456796>
<:family:1089180406705815612> </family help:1060212623712456798>
<a:fun:1078384554122944622> </fun help:946955149610463245>
<a:Games:998882010376450140> </games help:1060212623712456799>
<:giveawayIcon:1078381181487300672> </giveaway help:1060212623712456800>
<:guilds:1089180619646451802> </guild help:1060212623712456801>
<:ps:1077898522160021545> </images help:1060212623712456803>
<:invite:1077898516862611506> </invites help:1060212623750213715>`,
          inline: true
        },
        {
          name: "\u200b",
          value: "\u200b",
          inline: true
        },
        {
          name: "<:categories:1079993999655452702> • Categories [19-27]",
          value: `>>> <a:rocket:958670949291548693> </levels help:1060212623750213716>
<:message:946475281579933766> </messages help:1060212623750213718>
<a:moderation:1078385393000521809> </moderation help:1060212623750213719>
<a:music:959091822016200725> </music help:1077457921685848114>
<a:notepad:1089184906812330024> </notepad help:1060212623750213720>
<:profile:1089185074727100527> </profile help:1060212623750213721>
<:radio:1089185282961719387> </radio help:1060212623750213722>
<:reaction_roles_add:1089185452684230747> </reactionroles help:1060212623750213723>
<a:search:945593228328054825> </search help:1060212623792165014>`,
          inline: true
        }, {
          name: "<:categories:1079993999655452702> • Categories Part [28-36]",
          value: `>>> <:server:1002564389821481061> </serverstats help:1060212623792165015>
<:setup:1089178942688211026> </setup help:1060212623792165016>
<:soundboard_:1089185885066625094> </soundboard help:1077457921685848115>
<:msgs:1089186088691716207> </stickymessages help:1060212623792165018>
<:suggestion:1077948416778313738> </suggestions help:1060212623792165019>
<:thanks:1089186321177792593> </thanks help:1060212623792165020>
<:tickets:1077948421769531472> </tickets help:1060212623792165021>
<a:a_setting:953157853026340914> </tools help:1060212623792165022>
<:uo_voice_channel:1015566886303440906> </tools help:1060212623792165022>`,
          inline: true
        },
        {
          name: "\u200b",
          value: "\u200b",
          inline: true
        },
      ])


    let startButton = new ButtonBuilder().setStyle(2).setEmoji(`<a:rightarrow:1089189174395015228>`).setCustomId('start'),
      backButton = new ButtonBuilder().setStyle(2).setEmoji(`<:leftarrow:1089188196694364211>`).setCustomId('back'),
      forwardButton = new ButtonBuilder().setStyle(2).setEmoji(`<:Arrow_Right:1077887718991872020>`).setCustomId('forward'),
      endButton = new ButtonBuilder().setStyle(2).setEmoji(`<a:leftarrow15:1089189157009637436>`).setCustomId('end'),
      link = new ButtonBuilder().setStyle(5).setLabel("S" + "u" + "b" + "sc" + "ri" + "b" + "e" + "!").setEmoji(`🥹`).setURL('https://www.youtube.com/c/NitrixEXE')

    const options = [{ label: 'Overview', value: '0' }]
    const options2 = []
    
    let counter = 0
    let counter2 = 25
    require("fs").readdirSync(`${process.cwd()}/src/commands`).slice(0, 24).forEach(dirs => {
      counter++
      const opt = {
        label: toUpperCase(dirs.replace("-", " ")),
        value: `${counter}`
      }
      options.push(opt)
    })
    require("fs").readdirSync(`${process.cwd()}/src/commands`).slice(25, 37).forEach(dirs => {
      counter2++
      const opt = {
        label: toUpperCase(dirs.replace("-", " ")),
        value: `${counter2}`
      }
      options2.push(opt)
    })
    
    let menu = new StringSelectMenuBuilder().setPlaceholder('Change page').setCustomId('pagMenu').addOptions(options).setMaxValues(1).setMinValues(1),
      menu2 = new StringSelectMenuBuilder().setPlaceholder('Change page').setCustomId('pagMenu2').addOptions(options2).setMaxValues(1).setMinValues(1)

    const allButtons = [startButton.setDisabled(true), backButton.setDisabled(true), forwardButton.setDisabled(false), endButton.setDisabled(false), link]

    let group1 = new ActionRowBuilder().addComponents(menu)
    let group2 = new ActionRowBuilder().addComponents(allButtons)
    let group3 = new ActionRowBuilder().addComponents(menu2)

    const components = [group2, group1, group3]
    
    let helpMessage = await interaction.reply({
      content: `Click on the buttons to change page`,
      embeds: [em1],
      components: components,
    })
    
    const collector = helpMessage.createMessageComponentCollector((button) => button.user.id === interaction.user.id, { time: 60e3 });

    var embeds = [em1]
    
    require("fs").readdirSync(`${process.cwd()}/src/commands`).forEach(dirs => {embeds.push(new EmbedBuilder().setAuthor({name: toUpperCase(dirs),iconURL: client.user.displayAvatarURL({format:"png"}),url:`h`+`tt`+`ps:`+`//`+`d`+`s`+`c`+`.`+`gg`+`/u`+`o`+`a`+`i`+`o`}).setDescription(`${commad(dirs)}`))})

    let currentPage = 0

    collector.on('collect', async (b) => {
      if (b.user.id !== interaction.user.id)
        return b.reply({
          content: `**You Can't Use it\n**`,
          ephemeral: true
        });
      switch (b.customId) {
        case 'start':
          currentPage = 0
          group2 = new ActionRowBuilder().addComponents([startButton.setDisabled(true), backButton.setDisabled(true), forwardButton.setDisabled(false), endButton.setDisabled(false)])
          b.update({ embeds: [embeds[currentPage]], components: components })
          break;
        case 'back':
          --currentPage;
          if (currentPage === 0) { group2 = new ActionRowBuilder().addComponents([startButton.setDisabled(true), backButton.setDisabled(true), forwardButton.setDisabled(false), endButton.setDisabled(false)]) } else { group2 = new ActionRowBuilder().addComponents([startButton.setDisabled(false), backButton.setDisabled(false), forwardButton.setDisabled(false), endButton.setDisabled(false)]) }
          b.update({ embeds: [embeds[currentPage]], components: components })
          break;
        case 'forward':
          currentPage++;
          if (currentPage === embeds.length - 1) { group2 = new ActionRowBuilder().addComponents([startButton.setDisabled(false), backButton.setDisabled(false), forwardButton.setDisabled(true), endButton.setDisabled(true)]) } else { group2 = new ActionRowBuilder().addComponents([startButton.setDisabled(false), backButton.setDisabled(false), forwardButton.setDisabled(false), endButton.setDisabled(false)]) }
          b.update({ embeds: [embeds[currentPage]], components: components })
          break;
        case 'end':
          currentPage = embeds.length - 1;
          group2 = new ActionRowBuilder().addComponents([startButton.setDisabled(false), backButton.setDisabled(false), forwardButton.setDisabled(true), endButton.setDisabled(true)])
          b.update({ embeds: [embeds[currentPage]], components: components })
          break;
        case 'pagMenu':
          currentPage = parseInt(b.values[0])
          if (currentPage === 0) { group2 = new ActionRowBuilder().addComponents([startButton.setDisabled(true), backButton.setDisabled(true), forwardButton.setDisabled(false), endButton.setDisabled(false)]) } else if (currentPage === embeds.length - 1) { group2 = new ActionRowBuilder().addComponents([startButton.setDisabled(false), backButton.setDisabled(false), forwardButton.setDisabled(true), endButton.setDisabled(true)]) } else { group2 = new ActionRowBuilder().addComponents([startButton.setDisabled(false), backButton.setDisabled(false), forwardButton.setDisabled(false), endButton.setDisabled(false)]) }
          b.update({ embeds: [embeds[currentPage]], components: components })
          break;
        case 'pagMenu2':
          currentPage = parseInt(b.values[0])
          if (currentPage === 0) { group2 = new ActionRowBuilder().addComponents([startButton.setDisabled(true), backButton.setDisabled(true), forwardButton.setDisabled(false), endButton.setDisabled(false)]) } else if (currentPage === embeds.length - 1) { group2 = new ActionRowBuilder().addComponents([startButton.setDisabled(false), backButton.setDisabled(false), forwardButton.setDisabled(true), endButton.setDisabled(true)]) } else { group2 = new ActionRowBuilder().addComponents([startButton.setDisabled(false), backButton.setDisabled(false), forwardButton.setDisabled(false), endButton.setDisabled(false)]) }
          b.update({ embeds: [embeds[currentPage]], components: components })
          break;
        default:
          currentPage = 0
          b.update({ embeds: [embeds[currentPage]], components: null })
          break;
      }
    });

    collector.on('end', b => {
      b.update({ embeds: [helpMessage.embeds[0]], content: [], components: [] })
    });

    collector.on('error', (e) => console.log(e));

    embeds.map((embed, index) => {
      embed.setColor("#cdadff").setImage(`https://share.creavite.co/9knfNjj3wOkbFVx8.gif`)
        .setFooter({ text: `Page ${index + 1} / ${embeds.length}`, iconURL: client.user.displayAvatarURL() });
    })

  },
};