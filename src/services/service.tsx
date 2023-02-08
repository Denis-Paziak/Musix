import playlistsDB from "../database/playlistsDB";
import user_playlistsDB from "../database/user_playlistsDB";

interface Isoung {
    id: number,
    name: string,
}

interface Iplaylist {
    id: string,
    name: string,
    image: string,
    rating: number
}


class Service {
    async getPlaylistSoungs(soungsId: number[], playlistId: string | undefined) {

    }

    async getPlaylist(playlistId: string | undefined) {
        let data: any = null;

        user_playlistsDB.forEach((playlist: Iplaylist) => {
            if (playlist.id == playlistId) {
                data = { ...playlist };
            }
        });

        return data;

    }

};

export default Service;