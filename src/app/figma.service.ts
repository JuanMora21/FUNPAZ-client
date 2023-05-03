import { Injectable } from '@angular/core';
import * as Figma from 'figma-js';

@Injectable({
  providedIn: 'root',
})
export class FigmaService {
  private client: Figma.ClientInterface;

  constructor() {
    const token = 'figd_XM9Gcx2x-VoM3aedY8qPr5E8H53jAuCPZlW85Y-1';
    this.client = Figma.Client({ personalAccessToken: token });
  }

  getFile(fileId: string) {
    return this.client.file(fileId);
  }
}
