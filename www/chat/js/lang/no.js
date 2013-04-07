/*
 * @package AJAX_Chat
 * @author Sebastian Tschan
 * @author DagArneKirkerod
 * @copyright (c) Sebastian Tschan
 * @license GNU Affero General Public License
 * @link https://blueimp.net/ajax/
 */

// Ajax Chat language Object:
var ajaxChatLang = {

        login: '%s logger inn pa Chat.',
        logout: '%s logger ut av Chat.',
        logoutTimeout: '%s har blitt utlogget (Tidsbegrensning).',
        logoutIP: '%s har blitt logget ut (Ugyldig IP Adresse).',
        logoutKicked: '%s har blitt logget ut (sparket ut).',
        channelEnter: '%s kommer inn pa kanalen.',
        channelLeave: '%s forlater kanalen.',
        privmsg: '(hviskere)',
        privmsgto: '(hvisker til %s)',
        invite: '%s inviterer deg til a delta %s.',
        inviteto: 'Din invitasjon til %s a delta pa kanal %s er sendt.',
        uninvite: '%s trekker din invitasjon fra kanal %s.',
        uninviteto: 'Din tilbaketrekkning av invitasjon til %s for kanal %s er sendt.',
        queryOpen: 'Privat kanal apnet til %s.',
        queryClose: 'Privat kanal til %s er stengt.',
        ignoreAdded: 'Lagt %s til listen over ignorerte brukere.',
        ignoreRemoved: 'Fjernet %s fra liste over ignorerte brukere.',
        ignoreList: 'Ignorerte Brukere:',
        ignoreListEmpty: 'Ingen ignorerte brukere pa lista.',
        who: 'Paloggede Brukere:',
        whoChannel: 'Online Brukere i kanal %s:',
        whoEmpty: 'Ingen paloggede brukere pa valgt kanal.',
        list: 'Tilgjenglige kanaler:',
        bans: 'Utsparkede Brukere:',
        bansEmpty: 'Ingen utsparkede brukere pa lista.',
        unban: 'Bruker %s fjernet fra liste over utsparkede brukere.',
        whois: 'Bruker %s - IP adresse:',
        whereis: 'User %s is in channel %s.',
        roll: '%s triller %s og far %s.',
        nick: '%s is now known as %s.',
        toggleUserMenu: 'Toggle user menu for %s',
        userMenuLogout: 'Logout',
        userMenuWho: 'List online users',
        userMenuList: 'List available channels',
        userMenuAction: 'Describe action',
        userMenuRoll: 'Roll dice',
        userMenuNick: 'Endre brukernavn',
        userMenuEnterPrivateRoom: 'Skriv privat rom',
        userMenuSendPrivateMessage: 'Send en privat melding',
        userMenuDescribe: 'Send privat handling',
        userMenuOpenPrivateChannel: 'Apne privat kanal',
        userMenuClosePrivateChannel: 'Lukk privat kanal',
        userMenuInvite: 'Invite',
        userMenuUninvite: 'Uninvite',
        userMenuIgnore: 'Ignore/Accept',
        userMenuIgnoreList: 'Liste med ignorerte brukere',
        userMenuWhereis: 'Vise kanal',
        userMenuKick: 'Kick/Ban',
        userMenuBans: 'Liste sperrede brukere',
        userMenuWhois: 'Vise IP',
        unbanUser: 'Tilbakekalle forbud av brukeren %s',
        joinChannel: 'Delta pa kanal %s',
        cite: '%s sa:',
        urlDialog: 'Skriv inn adressen (URL) pa web siden:',
        deleteMessage: 'Slett denne chat-melding',
        deleteMessageConfirm: 'Vil du virkelig slette den valgte chat-melding?',
        errorCookiesRequired: 'Cookies er pakrevet pa denne chatten.',
        errorUserNameNotFound: 'Feil: Bruker %s ble ikke funnet.',
        errorMissingText: 'Feil: Mangler meldingstekst.',
        errorMissingUserName: 'Feil: Mangler Brukernavn.',
        errorInvalidUserName: 'Feil: Ugyldig brukernavn.',
        errorUserNameInUse: 'Feil: Brukernavnet er allerede i bruk.',
        errorMissingChannelName: 'Feil: Mangler navn pa kanal.',
        errorInvalidChannelName: 'Feil: Feil navn pa kanal: %s',
        errorPrivateMessageNotAllowed: 'Feil: Private meldinger ikke tillatt.',
        errorInviteNotAllowed: 'Feil: Du har ikke lov til a invitere noen til denne kanalen.',
        errorUninviteNotAllowed: 'Feil: Du har ikke lov til a fjerne invitasjon til noen brukere pa denne kanalen.',
        errorNoOpenQuery: 'Feil: Ingen private kanaler er apne.',
        errorKickNotAllowed: 'Feil: Du har ikke lov til a sparke ut %s.',
        errorCommandNotAllowed: 'Feil: Kommando ikke tillatt: %s',
        errorUnknownCommand: 'Feil: Ukjent kommando: %s',
        errorMaxMessageRate: 'Feil: Du overskredet maksimalt antall meldinger per minutt.',
        errorConnectionTimeout: 'Feil: Oppkoblingstid utgatt. Forsok forsok igjen.',
        errorConnectionStatus: 'Feil: Oppkoblingsstatus: %s',
        errorSoundIO: 'Feil: Kunne ikke laste lydfil (Flash IO Error).',
        errorSocketIO: 'Feil: Tilkobling til stikkontakt server mislyktes (Flash IO Error).',
        errorSocketSecurity: 'Feil: Tilkobling til stikkontakt server mislyktes (Flash Security Error).',
        errorDOMSyntax: 'Feil: Ugyldig DOM Syntaks (DOM ID: %s).'

}