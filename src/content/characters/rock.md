---
name: "Rock"
race: "Dwarf"
class: "Barbarian"
ac: 14
hp: 32
xpPips: 0
proficiencies: ["Acrobatics", "Animal Handling", "Nature", "Perception", "Performance"]
abilities:
  - name: "Reckless Attack"
    group: "Combat Actions"
    tags: ["Combat"]
    summary: "On your first attack, gain advantage on Str melee attacks but enemies gain advantage on you."
    details: |
      When you make your first attack on your turn, you can choose to attack recklessly.
      You gain advantage on Str-based melee weapon attacks this turn.
      Attack rolls against you have advantage until your next turn.
    order: 1
  - name: "Rage"
    group: "Bonus Actions & Reactions"
    tags: ["Bonus Action", "Combat", "Defense"]
    summary: "Enter a battle rage for 1 minute, gaining damage bonus and resistances."
    details: |
      Bonus action to enter Rage; lasts 1 minute.
      While raging: +2 damage on Str melee attacks; resist bludgeoning, piercing, and slashing.
      Rage ends early if you are knocked unconscious or you go a turn without attacking or taking damage.
    uses: "2 / long rest"
    recharge: "Long Rest"
    order: 1
  - name: "Wild Surge"
    group: "Resources & Limited Uses"
    tags: ["Combat", "Resource"]
    summary: "When you Rage, roll on the Wild Surge table for a temporary magical effect."
    details: |
      Trigger: when you enter Rage, roll a d8 on the Wild Surge table.
      Save DC for surge effects: 8 + proficiency bonus + Con modifier.  

      1: Tendrils lash; creatures of your choice within 30 ft Con save or take 1d12 necrotic; you gain 1d12 temp HP.

      2: Teleport up to 30 ft; you can repeat this teleport as a bonus action each turn while raging.
      
      3: Summon a spirit within 5 ft of a creature; at end of turn it explodes; creatures within 5 ft Dex save or take 1d6 force.  

      4: One weapon you hold gains light/thrown (20/60) and becomes force damage until rage ends.
      
      5: When a creature hits you, it takes 1d6 force damage.
      
      6: You and allies within 10 ft gain +1 AC while you rage.
      
      7: Ground within 15 ft is difficult terrain for enemies while you rage.
      
      8: A creature within 30 ft Con save or take 1d6 radiant and be blinded until your next turn; you can repeat each turn while raging.
    order: 1
  - name: "Magic Awareness"
    group: "Resources & Limited Uses"
    tags: ["Action", "Utility", "Detection"]
    summary: "Sense magic and magic items within 60 ft for 1 turn."
    details: |
      As an action, open your awareness to magic.
      Until the end of your next turn, you know the location of any spell or magic item within 60 ft that isn't behind total cover.
      You learn the school of magic, if any.
    uses: "Proficiency bonus / long rest"
    recharge: "Long Rest"
    order: 2
  - name: "Danger Sense"
    group: "Passives & Always-On Traits"
    tags: ["Passive", "Defense"]
    summary: "Advantage on Dex saves against effects you can see while not incapacitated."
    details: |
      You have advantage on Dexterity saving throws against effects you can see, such as traps and spells.
      You lose this benefit if you are blinded, deafened, or incapacitated.
    order: 1
  - name: "Unarmored Defense"
    group: "Passives & Always-On Traits"
    tags: ["Passive", "Defense"]
    summary: "While not wearing armor, AC = 10 + Dex mod + Con mod (shield ok)."
    details: |
      If you are not wearing armor, your AC equals 10 + Dex modifier + Con modifier.
      You can still use a shield and gain this benefit.
    order: 2
  - name: "Darkvision"
    group: "Passives & Always-On Traits"
    tags: ["Passive", "Utility"]
    summary: "See in dim light within 60 ft as bright, and darkness as dim."
    details: |
      You can see in dim light within 60 ft as if it were bright light.
      You can see in darkness within 60 ft as if it were dim light (no color vision).
    order: 3
  - name: "Dwarven Resilience"
    group: "Passives & Always-On Traits"
    tags: ["Passive", "Defense"]
    summary: "Advantage on poison saves and resistance to poison damage."
    details: |
      You have advantage on saving throws against poison.
      You have resistance to poison damage.
    order: 4
  - name: "Stonecunning"
    group: "Passives & Always-On Traits"
    tags: ["Passive", "Utility"]
    summary: "Double proficiency on History checks about stonework."
    details: |
      When you make an Intelligence (History) check related to stonework, add double your proficiency bonus.
      This applies instead of your normal proficiency bonus.
    order: 5
tags: ["bruiser", "axe", "frontline"]
portrait: "/images/characters/rock.png"
sheetUrl: "https://drive.google.com/file/d/1b-nSmKTmt9cb8g1bjfgqTVWr6ShmrHUy/view?usp=sharing"
blurb: "A proud dwarf who is as comfortable making stew as he is swinging a greataxe."
---

## Overview
- **Name:** Rock
- **Race:** Dwarf
- **Class:** Barbarian

## What you're known for
- Laughing in the face of danger
- A greataxe swing that clears the path
- Loyal protection of the party's backline

## Party role
Combat / Exploration

## Recent spotlight moment
*Placeholder — drop in a quick memory later.*
