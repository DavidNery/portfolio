export interface Project {
  title: string,
  description: string,
  images: string[],
  links?: {
    github?: string,
    site?: string
  }
}

export interface ProjectListType {
  title: string,
  description: string,
  projects: Project[]
}

const ProjectList: ProjectListType[] = [
  {
    title: "Web Developer",
    description: "Projects developed by me for web, including backend, frontend and UI/UX",
    projects: [
      {
        title: 'Plugin store',
        description: 'An old store plugin I made for a friend',
        images: [
          'https://i.imgur.com/6dOytcq.png',
          'https://i.imgur.com/ZzPrVlD.png',
          'https://i.imgur.com/r90lba4.png',
          'https://i.imgur.com/2q6Yol5.png',
          'https://i.imgur.com/kXzXFmh.png',
          'https://i.imgur.com/p7bxrya.png',
          'https://i.imgur.com/f55fSic.png',
          'https://i.imgur.com/deqo3VQ.png',
          'https://i.imgur.com/DZRYIA1.png',
          'https://i.imgur.com/l9aBzue.png',
          'https://i.imgur.com/EmRMESo.png',
          'https://i.imgur.com/sa1bbek.png',
          'https://i.imgur.com/SamNyxc.png',
          'https://i.imgur.com/TArN97Z.png',
          'https://i.imgur.com/6I6rEBS.png',
          'https://i.imgur.com/DyctEei.png',
          'https://i.imgur.com/gex9xsq.png',
          'https://i.imgur.com/m5XpDaa.png',
          'https://i.imgur.com/WaO5fCK.png',
          'https://i.imgur.com/jWGhw4u.png',
          'https://i.imgur.com/9wdu5KP.png',
          'https://i.imgur.com/7FpAKnI.png',
          'https://i.imgur.com/H7T9rds.png'
        ]
      },
      {
        title: 'Site 2',
        description: 'An old site I made for a school project',
        images: [
          'https://i.imgur.com/gT2fDpc.png',
          'https://i.imgur.com/XnLus1H.png',
          'https://i.imgur.com/SHNHJCy.png',
          'https://i.imgur.com/U8J3mVS.png',
          'https://i.imgur.com/YSCT0Tm.png',
          'https://i.imgur.com/guDEXbx.png',
          'https://i.imgur.com/xkN8yoW.png',
          'https://i.imgur.com/kZUEykf.png',
          'https://i.imgur.com/pMlpkkn.png',
          'https://i.imgur.com/SY76rpC.png',
          'https://i.imgur.com/ERslz9s.png',
          'https://i.imgur.com/myZRaMw.png',
          'https://i.imgur.com/4DeBdAR.png',
          'https://i.imgur.com/qMJEX8P.png',
          'https://i.imgur.com/lkwtSvC.png',
          'https://i.imgur.com/Ek4sJm4.png',
          'https://i.imgur.com/cDhALga.png',
          'https://i.imgur.com/pJ8gxj2.png',
          'https://i.imgur.com/F38eCBe.png'
        ]
      },
      {
        title: 'Minecraft Server Site',
        description: 'An old minecraft site with store and punishment history',
        images: [
          'https://i.imgur.com/pYjWeVG.png',
          'https://i.imgur.com/QVIl1vt.png',
          'https://i.imgur.com/nM3eCTG.png',
          'https://i.imgur.com/8AefHe6.png',
          'https://i.imgur.com/h3W4FZ4.png',
          'https://i.imgur.com/3uIcEvC.png'
        ],
        links: {
          github: "https://github.com/DavidNery/old-websites/tree/main/site"
        }
      },
      {
        title: 'My first site',
        description: 'My first website developed',
        images: [
          'https://i.imgur.com/I9Y1zEp.png',
          'https://i.imgur.com/VL9K3Zx.png',
          'https://i.imgur.com/YygPdq8.png',
          'https://i.imgur.com/5820l1y.png',
          'https://i.imgur.com/DuDmwhN.png'
        ],
        links: {
          github: "https://github.com/DavidNery/old-websites/tree/main/site2"
        }
      },
      {
        title: 'Builder Team Website',
        description: 'A website I made for a builder team',
        images: [
          'https://i.imgur.com/gPqQvyE.png',
          'https://i.imgur.com/hjy35xt.png',
          'https://i.imgur.com/BsthdRM.png',
          'https://i.imgur.com/dECMkaW.png',
          'https://i.imgur.com/G9OpIN6.png',
          'https://i.imgur.com/mHF8c6P.png',
          'https://i.imgur.com/ZKGHgGS.png',
          'https://i.imgur.com/tf7GURY.png'
        ],
        links: {
          github: "https://github.com/DavidNery/old-websites/tree/main/site3"
        }
      },
      {
        title: 'Minecraft Server Site',
        description: 'Another minecraft server site, with shop, staff list and rules',
        images: [
          'https://i.imgur.com/9a8porR.png',
          'https://i.imgur.com/pweYIfB.png',
          'https://i.imgur.com/tzr0ci7.png',
          'https://i.imgur.com/zbuKHN7.png',
          'https://i.imgur.com/0PPmyK1.png',
          'https://i.imgur.com/VnqWp6t.png',
          'https://i.imgur.com/MfVX7UP.png',
          'https://i.imgur.com/pXIIBd9.png',
          'https://i.imgur.com/eWj0I5c.png',
          'https://i.imgur.com/uhkyxvC.png'
        ],
        links: {
          github: "https://github.com/DavidNery/old-websites/tree/main/site4"
        }
      },
      {
        title: 'Seniors Team Site',
        description: 'A simple and beatiful website I made for Seniors Team',
        images: [
          'https://i.imgur.com/a5Cd7pd.png',
          'https://i.imgur.com/Yd50RZV.png',
          'https://i.imgur.com/uY4PNSD.png',
          'https://i.imgur.com/rIKISog.png',
          'https://i.imgur.com/QZh6Xnq.png',
          'https://i.imgur.com/4w7plId.png',
          'https://i.imgur.com/2ojytS6.png',
          'https://i.imgur.com/svq2UVZ.png',
          'https://i.imgur.com/MGp44SI.png',
          'https://i.imgur.com/INhkuZ2.png'
        ],
        links: {
          github: "https://github.com/DavidNery/senior-test-website"
        }
      },
      {
        title: 'Seniors Team Marketplace Design',
        description: 'A design I made for Seniors Team Marketplace',
        images: ['https://i.imgur.com/cQlUIgJ.png']
      },
      {
        title: 'MinecraftList.dk',
        description: 'A minecraft server list and voting website',
        images: [
          'https://i.imgur.com/sKL0Ect.png',
          'https://i.imgur.com/cNfmnH1.png',
          'https://i.imgur.com/TVcDTKF.png',
          'https://i.imgur.com/0ShZu4o.png',
          'https://i.imgur.com/gxi1sxG.png',
          'https://i.imgur.com/Yr1UsVT.png',
          'https://i.imgur.com/PPfV6rF.png',
          'https://i.imgur.com/nfMCAK9.png',
          'https://i.imgur.com/rgY7K3W.png',
          'https://i.imgur.com/85Wluc4.png',
          'https://i.imgur.com/obXbqDb.png',
          'https://i.imgur.com/Cn5xH1T.png',
          'https://i.imgur.com/zbEPa6K.png',
          'https://i.imgur.com/MOF7y1b.png',
        ],
        links: {
          site: "https://minecraftlist.dk/"
        }
      },
      {
        title: 'Integrated Minecraft Web Panel',
        description: 'A webpanel that communicate with minecraft server and allow staffs to check and do a lot of things',
        images: [
          'https://i.imgur.com/ajZqBfP.mp4',
          'https://i.imgur.com/3U4LX7a.mp4',
          'https://i.imgur.com/VKdy0Tj.mp4',
          'https://i.imgur.com/qUUuFar.mp4',
          'https://i.imgur.com/fHIM9oe.mp4',
          'https://i.imgur.com/KVIRruT.mp4',
          'https://i.imgur.com/NOnn8Gc.mp4',
          'https://i.imgur.com/75YxEm9.mp4',
          'https://i.imgur.com/6nKmGwL.mp4',
          'https://i.imgur.com/H1ezU44.mp4',
          'https://i.imgur.com/FyRBHfY.mp4',
          'https://i.imgur.com/w3xST6i.mp4',
          'https://i.imgur.com/4YqUcRW.mp4',
          'https://i.imgur.com/x9xhgIW.mp4',
          'https://i.imgur.com/BTrvZkk.mp4'
        ],
      }
    ]
  },
  {
    title: "Plugin Developer",
    description: "Spigot plugins developed by me",
    projects: [
      {
        title: 'Sword spawner',
        description: 'A plugin that make spawners drop swords',
        images: ['https://i.imgur.com/723FHXR.gif']
      },
      {
        title: 'Inventory Saver',
        description: 'A plugin that save players\' inventories and allow them to get inventories again',
        images: ['https://i.imgur.com/O0fr7ph.gif'],
        links: {
          github: "https://github.com/DavidNery/SeniorsInventorySaver"
        }
      },
      {
        title: 'Events',
        description: 'A plugin that lets you create simple events like parkour, racing and so on',
        images: [
          'https://i.imgur.com/8hR7Bcy.png',
          'https://i.imgur.com/zKNckY7.png',
          'https://i.imgur.com/Vvw7R8T.png',
          'https://i.imgur.com/gxWmvyS.png',
          'https://i.imgur.com/BjaM6vW.png',
          'https://i.imgur.com/eWeeaou.png',
          'https://i.imgur.com/BZaVdnp.png',
          'https://i.imgur.com/ESeDKRJ.png',
          'https://i.imgur.com/7nkdQht.png',
          'https://i.imgur.com/XlGg6HM.png',
          'https://i.imgur.com/OksgVFK.png',
          'https://i.imgur.com/fmtF7Ft.png',
          'https://i.imgur.com/JmYVYKM.png',
          'https://i.imgur.com/X0qXCjW.png',
          'https://i.imgur.com/HA2sTxY.png',
          'https://i.imgur.com/GvKb6wx.png',
          'https://i.imgur.com/5w5fTiS.png'
        ]
      },
      {
        title: 'Spawner',
        description: 'Another spawner plugin, but that stack them, but with levels, "fuel", stack mobs and public/private function',
        images: [
          'https://i.imgur.com/53ufqy5.gif',
          'https://i.imgur.com/iQv89zQ.png',
          'https://i.imgur.com/zaKVSbX.png',
          'https://i.imgur.com/8emLtJ4.png',
          'https://i.imgur.com/N6Zlhq9.png',
          'https://i.imgur.com/MhrcGGm.png',
          'https://i.imgur.com/8rOpfM2.png',
          'https://i.imgur.com/6Qo6htG.gif',
          'https://i.imgur.com/losbwaV.png',
          'https://i.imgur.com/5NROKAL.png',
          'https://i.imgur.com/FOBMvE8.png'
        ]
      },
      {
        title: 'Explosive pickaxes',
        description: 'A plugin that create pickaxes that when you mine something, it generate a "explosion", destroying an entire area',
        images: [
          'https://i.imgur.com/3uHNPY2.gif'
        ]
      },
      {
        title: 'Shape helper',
        description: 'A plugin that allow your players to see how to craft items',
        images: [
          'https://i.imgur.com/PGgXZ4A.gif'
        ],
        links: {
          site: "https://www.spigotmc.org/resources/shapehelper.105357/"
        }
      },
      {
        title: 'UltimateBans',
        description: 'Experimental bans plugin',
        images: [
          'https://i.imgur.com/d1kQzR2.png',
          'https://i.imgur.com/h7nlWrR.png',
          'https://i.imgur.com/leOxxEx.png',
          'https://i.imgur.com/LwCzc0p.png',
          'https://i.imgur.com/725xPF0.png',
          'https://i.imgur.com/qPW80bc.png'
        ],
        links: {
          github: 'https://github.com/DavidNery/UltimateBans'
        }
      }
    ]
  }
];

export default ProjectList;