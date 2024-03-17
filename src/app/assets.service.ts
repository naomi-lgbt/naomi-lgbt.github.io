import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { Adventure } from "../interfaces/Adventure";
import { Assets } from "../interfaces/Assets";
import { Emote } from "../interfaces/Emote";
import { Outfit } from "../interfaces/Outfit";
import { Portrait } from "../interfaces/Portrait";
import { Pose } from "../interfaces/Pose";

/**
 *
 */
@Injectable({
  providedIn: "root"
})
export class AssetsService {
  private _data: Assets;
  /**
   *
   * @param {HttpClient} http Angular's HTTPClient instance.
   */
  constructor(private http: HttpClient) {
    this._data = {
      adventures: [],
      emotes: [],
      outfits: [],
      portraits: [],
      poses: [],
      melody: []
    };
  }

  /**
   * @returns {Observable<Adventure[]>} The adventure payload from the Assets API.
   */
  public fetchAdventures(): Observable<Adventure[]> {
    if (this._data.adventures.length) {
      return of(this._data.adventures);
    }
    const adventures = this.http.get<Adventure[]>(
      "https://asset-list.naomi.lgbt/json/naomi/adventures.json"
    );
    adventures.subscribe((adventures) => (this._data.adventures = adventures));
    return adventures;
  }

  /**
   * @returns {Observable<Emote[]>} The Emote payload from the Assets API.
   */
  public fetchEmotes(): Observable<Emote[]> {
    if (this._data.emotes.length) {
      return of(this._data.emotes);
    }
    const emotes = this.http.get<Emote[]>(
      "https://asset-list.naomi.lgbt/json/naomi/emotes.json"
    );
    emotes.subscribe((emotes) => (this._data.emotes = emotes));
    return emotes;
  }

  /**
   * @returns {Observable<Outfit[]>} The adventure payload from the Assets API.
   */
  public fetchOutfits(): Observable<Outfit[]> {
    if (this._data.outfits.length) {
      return of(this._data.outfits);
    }
    const outfits = this.http.get<Outfit[]>(
      "https://asset-list.naomi.lgbt/json/naomi/outfits.json"
    );
    outfits.subscribe((outfits) => (this._data.outfits = outfits));
    return outfits;
  }

  /**
   * @returns {Observable<Portrait[]>} The Portrait payload from the Assets API.
   */
  public fetchPortraits(): Observable<Portrait[]> {
    if (this._data.portraits.length) {
      return of(this._data.portraits);
    }
    const portraits = this.http.get<Portrait[]>(
      "https://asset-list.naomi.lgbt/json/naomi/portraits.json"
    );
    portraits.subscribe((portraits) => (this._data.portraits = portraits));
    return portraits;
  }

  /**
   * @returns {Observable<Pose[]>} The Pose payload from the Assets API.
   */
  public fetchPoses(): Observable<Pose[]> {
    if (this._data.poses.length) {
      return of(this._data.poses);
    }
    const poses = this.http.get<Pose[]>(
      "https://asset-list.naomi.lgbt/json/naomi/poses.json"
    );
    poses.subscribe((poses) => (this._data.poses = poses));
    return poses;
  }

  /**
   * @returns {Observable<Pose[]>} The Pose payload from the Assets API.
   */
  public fetchMelody(): Observable<Pose[]> {
    if (this._data.melody.length) {
      return of(this._data.melody);
    }
    const poses = this.http.get<Pose[]>(
      "https://asset-list.naomi.lgbt/json/melody/poses.json"
    );
    poses.subscribe((poses) => (this._data.melody = poses));
    return poses;
  }
}
