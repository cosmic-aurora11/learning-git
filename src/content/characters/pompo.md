---
name: "Pompo"
race: "Human"
class: "Sorcerer"
ac: 12
hp: 19
xpPips: 1
proficiencies: ["Arcana", "Deception", "Insight", "Sleight of Hand"]
abilities:
  - name: "Flexible Casting"
    group: "Bonus Actions & Reactions"
    tags: ["Bonus Action", "Resource"]
    summary: "Use sorcery points to create spell slots (or swap slots to points)."
    details: |
      As a bonus action, you can transform unexpended sorcery points into a spell slot.
      You can also convert a spell slot into sorcery points.
    order: 2
  - name: "Shield"
    group: "Bonus Actions & Reactions"
    tags: ["Reaction", "Defense"]
    summary: "Reaction to being hit; gain +5 AC until your next turn."
    details: |
      When you are hit or targeted by magic missile, you can raise a magical barrier.
      You gain +5 AC until the start of your next turn, and take no damage from magic missile.
    order: 3
  - name: "Sorcery Points"
    group: "Resources & Limited Uses"
    tags: ["Resource"]
    summary: "Pool of 3 points used for metamagic and flexible casting."
    details: |
      You have 3 sorcery points.
      You regain all spent sorcery points when you finish a long rest.
    order: 1
  - name: "Tides of Chaos"
    group: "Resources & Limited Uses"
    tags: ["Resource", "Utility"]
    summary: "Gain advantage on one roll; chaos can surge before you regain it."
    details: |
      Gain advantage on one attack roll, ability check, or saving throw.
      The DM can call for a Wild Magic Surge after you cast a sorcerer spell of 1st level or higher; you then regain this feature.
    uses: "1 / long rest"
    recharge: "Long Rest"
    order: 2
  - name: "Creating Spell Slots"
    group: "Resources & Limited Uses"
    tags: ["Resource"]
    summary: "Spend sorcery points to create spell slots."
    details: |
      1st-level slot: 2 sorcery points.
      2nd-level slot: 3 sorcery points.
      3rd-level slot: 5 sorcery points.
      4th-level slot: 6 sorcery points.
      5th-level slot: 7 sorcery points.
    order: 3
  - name: "Converting Spell Slots"
    group: "Resources & Limited Uses"
    tags: ["Resource"]
    summary: "Convert a spell slot into sorcery points."
    details: "As a bonus action, expend one spell slot and gain sorcery points equal to the slot's level."
    order: 4
  - name: "Wild Magic Surge"
    group: "Resources & Limited Uses"
    tags: ["Resource", "Wild Magic"]
    summary: "After casting a 1st+ sorcerer spell, chaos can surge on a d20 roll."
    details: |
      After you cast a sorcerer spell of 1st level or higher, the DM can have you roll a d20.
      On a 1, roll on the Wild Magic Surge table for the effect.
      If the surge effect is a spell, it lasts its full duration and doesn't require concentration.
    order: 5
  - name: "Metamagic"
    group: "Metamagic & Spell Shaping"
    tags: ["Resource"]
    summary: "Twist spells with metamagic options when you cast them."
    details: |
      At 3rd level, you gain two metamagic options of your choice.
      You can use only one metamagic option on a spell unless noted otherwise.
    order: 1
  - name: "Metamagic: Twinned Spell"
    group: "Metamagic & Spell Shaping"
    tags: ["Resource"]
    summary: "Spend sorcery points to target a second creature."
    details: |
      When a spell targets only one creature and doesn't have a range of self, you can spend sorcery points to target a second creature.
      Cost equals the spell's level (1 point for a cantrip).
    order: 2
  - name: "Metamagic: Quickened Spell"
    group: "Metamagic & Spell Shaping"
    tags: ["Resource"]
    summary: "Spend 2 sorcery points to cast a 1-action spell as a bonus action."
    details: "When you cast a spell with a casting time of 1 action, you can spend 2 sorcery points to change the casting time to 1 bonus action."
    order: 3
  - name: "False Identity"
    group: "Passives & Always-On Traits"
    tags: ["Passive", "Utility"]
    summary: "Maintain a second persona with documents and papers."
    details: |
      You have created a second identity with documentation, acquaintances, and disguises.
      You can forge documents, including official papers and personal letters, if you have seen an example.
    order: 1
  - name: "Wild Magic Origin"
    group: "Passives & Always-On Traits"
    tags: ["Passive", "Wild Magic"]
    summary: "Your magic is unpredictable and surges with chaos."
    details: "Your spellcasting is infused with wild, unstable magic that can flare at unexpected moments."
    order: 2
tags: ["arcane", "improv", "wildfire"]
portrait: "/images/characters/pompo.jpeg"
sheetUrl: "https://drive.google.com/file/d/1zEylCzVL5UIa7bY_cQ3lEU42ZhTHfVWa/view?usp=sharing"
blurb: "A sorcerer whose gift of gab gets him in as much trouble as his wild magic surges." 
history: "Raised among street performers in Glassharbor, Pompo learned to twist wild magic into a show. A mentor's disappearance pushed him toward adventuring, hunting for clues in every arcane whisper."
roleplayTips:
  - "Lead with curiosity when magic is involved, even in tense scenes."
  - "Offer levity after heavy moments, but pull back when stakes spike."
spells:
  ability: "CHA"
  saveDC: 13
  attackBonus: 5
  sections:
    - level: 0
      label: "Cantrips"
      items:
        - name: "Fire Bolt"
          tags: ["Action", "Damage"]
          summary: "Ranged spell attack; 1d10 fire damage."
          details: |
            Make a ranged spell attack at a creature or object within range.
            On a hit, the target takes 1d10 fire damage; flammable objects ignite if not worn or carried.
            Damage scales at higher levels.
          order: 1
        - name: "Mage Hand"
          tags: ["Action", "Utility"]
          summary: "Create a spectral hand to manipulate objects at range."
          details: |
            A floating hand appears within range and lasts for 1 minute or until you dismiss it.
            You can use it to manipulate objects, open containers, or retrieve items at a distance.
            The hand cannot attack or carry heavy loads.
          order: 2
        - name: "Minor Illusion"
          tags: ["Action", "Utility"]
          summary: "Create a sound or small image as an illusion."
          details: |
            Create a sound or an image of an object within range for up to 1 minute.
            The illusion can be examined; a successful Investigation check reveals it as illusory.
            Physical interaction exposes it as intangible.
          order: 3
        - name: "Prestidigitation"
          tags: ["Action", "Utility"]
          summary: "Perform minor magical tricks and sensory effects."
          details: |
            Create small sensory effects, clean/soil items, light/snuff flames, or warm/chill flavor.
            Effects are minor and last up to 1 hour where applicable.
            You can maintain up to three non-instantaneous effects at once.
          order: 4
    - level: 1
      label: "1st Level"
      items:
        - name: "Shield"
          tags: ["Reaction", "Defense"]
          summary: "Reaction; +5 AC until your next turn, and no magic missile damage."
          details: |
            When you are hit by an attack or targeted by magic missile, you can conjure a barrier.
            Assume a +5 bonus to AC until the start of your next turn, and magic missile deals no damage to you.
          order: 1
        - name: "Chaos Bolt"
          tags: ["Action", "Damage"]
          summary: "Ranged spell attack with shifting damage type."
          details: |
            Make a ranged spell attack; on a hit, deal 2d8 + 1d6 damage.
            The d8s determine the damage type; if they match, the bolt can leap to another creature within 30 feet.
            Each target can only be targeted once per casting.
          order: 2
        - name: "Grease"
          tags: ["Action", "Control"]
          summary: "Slick a 10-foot square; creatures can slip and fall prone."
          details: |
            A 10-foot square becomes difficult terrain.
            Creatures entering or starting their turn there must make a Dex save or fall prone.
          order: 3
        - name: "Earth Tremor"
          tags: ["Action", "Control"]
          summary: "Shake the ground; creatures can take damage and be knocked prone."
          details: |
            Creatures on the ground in range make a Dexterity save or take bludgeoning damage and fall prone.
            The ground becomes difficult terrain until cleared.
          order: 4
        - name: "Disguise Self"
          tags: ["Action", "Utility"]
          summary: "Alter your appearance for up to 1 hour."
          details: |
            Change your appearance, clothing, and gear to look different.
            Physical inspection can reveal the illusion; creatures can use an action to inspect against your save DC.
          order: 5
    - level: 2
      label: "2nd Level"
      items:
        - name: "Scorching Ray"
          tags: ["Action", "Damage"]
          summary: "Hurl three rays; each makes a ranged spell attack for 2d6 fire."
          details: |
            Create three rays and make a ranged spell attack for each.
            On a hit, each ray deals 2d6 fire damage; you can target one creature or several.
            At higher levels, you create additional rays.
          order: 1
---

## Overview
- **Name:** Pompo
- **Race:** Human
- **Class:** Sorcerer

## What you're known for
- Off-the-cuff spells that still land perfectly
- A knack for reading the room
- Turning chaos into opportunities

## Party role
Combat / Social

## Recent spotlight moment
*Placeholder — drop in a quick memory later.*
