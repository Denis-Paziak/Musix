import plalistTrackDB from "../database/playlistTrackDB";
import user_playlistsDB from "../database/user_playlistsDB";
import soungsDB from "../database/soungsDB";

interface Isoung {
    id: string,
    name: string,
}

interface Iplaylist {
    playlistId: string,
    soungId: string,
}

interface IuserPlaylist {
    id: string,
    name: string,
    image: string,
    rating: number
}


class Service {


    async getPlaylistSoungs(playlistId: string | undefined) {
        let soungs: Isoung[] = [];

        plalistTrackDB.forEach((playlistTrack: any) => {
            if (playlistId == playlistTrack.playlistId) {

                soungsDB.forEach((soung: Isoung) => {
                    if (playlistTrack.soungId == soung.id) {
                        soungs.push(soung);
                    }
                });

            }
        });

        return soungs

    }

    async getPlaylist(playlistId: string | undefined) {
        let data: any = null;

        user_playlistsDB.forEach((playlist: IuserPlaylist) => {
            if (playlist.id == playlistId) {
                data = { ...playlist };
            }
        });

        return data;

    }

};

export default Service;