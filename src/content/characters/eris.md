---
name: "Eris"
race: "Dragonborn"
class: "Cleric"
ac: 15
hp: 23
xpPips: 2
proficiencies: ["Athletics", "Insight", "Intimidation", "Religion"]
abilities:
  - name: "Breath Weapon"
    group: "Combat Actions"
    tags: ["Action", "Combat", "AoE"]
    summary: "15 ft cone; Dex save for 2d6 fire (half on success)."
    details: "Casting Time: Action. Range: 15 ft cone. Save DC: 8 + Con mod + proficiency. Effect: 2d6 fire damage; half on success."
    uses: "1 / short rest"
    recharge: "Short or Long Rest"
    order: 1
  - name: "Channel Divinity: Turn Undead"
    group: "Combat Actions"
    tags: ["Action", "Control", "Channel Divinity"]
    summary: "Undead within 30 ft fail Wis save and are turned for 1 minute."
    details: "Action; each undead that can see or hear you within 30 ft makes a Wis save (DC = spell save DC). Fail: turned for 1 minute or until it takes damage; must move away, no reactions, only Dash/Dodge unless trapped."
    uses: "Channel Divinity"
    recharge: "Short or Long Rest"
    order: 2
  - name: "War Priest"
    group: "Bonus Actions & Reactions"
    tags: ["Bonus Action", "Combat"]
    summary: "After an Attack action, make one weapon attack as a bonus action."
    details: "When you take the Attack action, you can make one weapon attack as a bonus action."
    uses: "Wis mod / long rest (min 1)"
    recharge: "Long Rest"
    order: 1
  - name: "Channel Divinity: Guided Strike"
    group: "Bonus Actions & Reactions"
    tags: ["Reaction", "Combat", "Channel Divinity"]
    summary: "Add +10 to an attack roll after seeing the roll."
    details: "When you make an attack roll, you can use Channel Divinity to add +10 after the roll but before the DM says hit or miss."
    uses: "Channel Divinity"
    recharge: "Short or Long Rest"
    order: 2
  - name: "Channel Divinity"
    group: "Resources & Limited Uses"
    tags: ["Resource", "Channel Divinity"]
    summary: "Tap divine power to fuel one Channel Divinity effect."
    details: "You have Channel Divinity; choose one effect when you use it. Regain uses on a short or long rest. Any save uses your cleric spell save DC."
    uses: "1 / short rest"
    recharge: "Short or Long Rest"
    order: 1
  - name: "Damage Resistance (Fire)"
    group: "Passives & Always-On Traits"
    tags: ["Passive"]
    summary: "You have resistance to fire damage."
    details: "When you take fire damage, halve the damage before applying it."
    order: 1
  - name: "Ritual Casting"
    group: "Passives & Always-On Traits"
    tags: ["Utility", "Passive"]
    summary: "Cast prepared cleric spells with the ritual tag as rituals."
    details: "If a prepared cleric spell has the ritual tag, you can cast it as a ritual without using a spell slot."
    order: 2
  - name: "Military Rank"
    group: "Passives & Always-On Traits"
    tags: ["Social", "Utility"]
    summary: "Leverage rank for cooperation, supplies, and access."
    details: "Friendly soldiers respect your authority; you can request simple gear or horses temporarily and gain access to friendly military spaces."
    order: 3
spells:
  ability: "Wisdom"
  saveDC: 12
  attackBonus: 4
  sections:
    - level: 0
      label: "Cantrips"
      items:
        - name: "Sacred Flame"
          tags: ["Action", "Combat"]
          summary: "Dex save; 1d8 radiant; target gets no cover benefit on the save."
          details: "Casting Time: Action. Range: 60 ft. Concentration: No. Effect: Target makes a Dex save or takes 1d8 radiant damage; no benefit from cover for this save."
          order: 1
        - name: "Guidance"
          tags: ["Action", "Utility", "Buff", "Concentration"]
          summary: "Touch a creature to add 1d4 to one ability check within 1 minute."
          details: "Casting Time: Action. Range: Touch. Concentration: Yes (up to 1 minute). Effect: One willing creature adds 1d4 to one ability check before the spell ends."
          order: 2
        - name: "Light"
          tags: ["Action", "Utility"]
          summary: "Object shines bright light for 1 hour."
          details: "Casting Time: Action. Range: Touch. Concentration: No. Effect: Object (10 ft max) sheds 20 ft bright + 20 ft dim light for 1 hour; can be colored; you can dismiss it. If cast on a hostile held object, Dex save negates."
          order: 3
    - level: 1
      label: "1st Level"
      items:
        - name: "Healing Word"
          tags: ["Bonus Action", "Healing"]
          summary: "Bonus action heal at 60 ft; 1d4 + Wis."
          details: "Casting Time: Bonus Action. Range: 60 ft. Concentration: No. Effect: One creature you can see regains 1d4 + Wis modifier HP (no effect on undead/constructs)."
          order: 1
        - name: "Bless"
          tags: ["Action", "Buff", "Concentration"]
          summary: "Concentration buff; add 1d4 to attacks and saving throws for up to 3 creatures."
          details: "Casting Time: Action. Range: 30 ft. Concentration: Yes (up to 1 minute). Effect: Up to three creatures add 1d4 to attack rolls and saving throws; upcast adds one target per slot level above 1st."
          order: 2
        - name: "Guiding Bolt"
          tags: ["Action", "Combat"]
          summary: "Ranged spell attack; 4d6 radiant and next attack against target has advantage."
          details: "Casting Time: Action. Range: 120 ft. Concentration: No. Effect: Ranged spell attack; on hit deal 4d6 radiant and the next attack before end of your next turn has advantage."
          order: 3
        - name: "Shield of Faith"
          tags: ["Bonus Action", "Buff", "Concentration"]
          summary: "Concentration; grant +2 AC to a creature within 60 ft."
          details: "Casting Time: Bonus Action. Range: 60 ft. Concentration: Yes (up to 10 minutes). Effect: Target gains +2 AC for the duration."
          order: 4
        - name: "Cure Wounds"
          tags: ["Action", "Healing"]
          summary: "Touch heal; 1d8 + Wis."
          details: "Casting Time: Action. Range: Touch. Concentration: No. Effect: Creature you touch regains 1d8 + Wis modifier HP (no effect on undead/constructs)."
          order: 5
        - name: "Command"
          tags: ["Action", "Control"]
          summary: "One-word command; Wis save or follow on its next turn."
          details: "Casting Time: Action. Range: 60 ft. Concentration: No. Effect: One creature you can see makes a Wis save or follows a one-word command for 1 round; no effect on undead or targets that cannot understand you."
          order: 6
        - name: "Detect Magic"
          tags: ["Action", "Utility", "Detection", "Concentration"]
          summary: "Sense magic within 30 ft; focus to see auras."
          details: "Casting Time: Action. Range: Self. Concentration: Yes (up to 10 minutes). Effect: Sense magic within 30 ft; you can use your action to see auras; blocked by 1 ft stone, 1 in common metal, thin lead, or 3 ft wood/dirt."
          order: 7
        - name: "Create or Destroy Water"
          tags: ["Action", "Utility"]
          summary: "Create or destroy up to 10 gallons of water (or a 30 ft cube rain)."
          details: "Casting Time: Action. Range: 30 ft. Concentration: No. Effect: Create or destroy up to 10 gallons of water in an open container, or create rain in a 30 ft cube to extinguish flames; upcast adds 10 gallons or +5 ft cube per slot level."
          order: 8
        - name: "Inflict Wounds"
          tags: ["Action", "Combat"]
          summary: "Melee spell attack; 3d10 necrotic."
          details: "Casting Time: Action. Range: Touch. Concentration: No. Effect: Make a melee spell attack; on hit deal 3d10 necrotic damage."
          order: 9
        - name: "Divine Favor"
          tags: ["Bonus Action", "Combat", "Buff", "Concentration"]
          summary: "Self buff; weapon attacks deal +1d4 radiant for 1 minute."
          details: "Casting Time: Bonus Action. Range: Self. Concentration: Yes (up to 1 minute). Effect: Your weapon attacks deal +1d4 radiant damage."
          order: 10
    - level: 2
      label: "2nd Level"
      items:
        - name: "Spiritual Weapon"
          tags: ["Bonus Action", "Combat"]
          summary: "Bonus action summon; make spell attack now and on later turns; no concentration."
          details: "Casting Time: Bonus Action. Range: 60 ft. Concentration: No. Effect: Create a floating weapon; make a melee spell attack for 1d8 + Wis force damage, and on later turns use a bonus action to move 20 ft and attack."
          order: 1
        - name: "Hold Person"
          tags: ["Action", "Control", "Concentration"]
          summary: "Paralyze a humanoid on a failed Wis save."
          details: "Casting Time: Action. Range: 60 ft. Concentration: Yes (up to 1 minute). Effect: One humanoid makes a Wis save or is paralyzed; it can repeat the save at the end of each turn."
          order: 2
        - name: "Aid"
          tags: ["Action", "Healing", "Buff"]
          summary: "Boost up to three creatures' max and current HP by 5 for 8 hours."
          details: "Casting Time: Action. Range: 30 ft. Concentration: No. Effect: Up to three creatures increase current and max HP by 5 for 8 hours; upcast adds +5 HP per slot level above 2nd."
          order: 3
        - name: "Prayer of Healing"
          tags: ["Utility", "Healing"]
          summary: "10-minute cast; heal up to six creatures for 2d8 + Wis."
          details: "Casting Time: 10 minutes. Range: 30 ft. Concentration: No. Effect: Up to six creatures you can see regain 2d8 + Wis modifier HP (no effect on undead/constructs); upcast adds 1d8 per slot level above 2nd."
          order: 4
        - name: "Magic Weapon"
          tags: ["Bonus Action", "Buff", "Concentration"]
          summary: "Touch a weapon to make it magical with a +1 bonus."
          details: "Casting Time: Bonus Action. Range: Touch. Concentration: Yes (up to 1 hour). Effect: Weapon becomes magical and gains +1 to attack and damage rolls; higher slots can increase the bonus."
          order: 5
tags: ["healer", "lore", "dragonline"]
portrait: "/images/characters/placeholder.svg"
sheetUrl: "https://drive.google.com/file/d/1dbKh77wUNldjObwDrb6zlKzru83YvAWx/view?usp=sharing"
blurb: "A steadfast cleric who carries ancient hymns in her blood." 
---

## Overview
- **Name:** Eris
- **Race:** Dragonborn
- **Class:** Cleric

## What you're known for
- Turning whispers of old gods into guidance
- Keeping the party alive under pressure
- Seeing the moral weight behind every choice

## Party role
Combat / Social / Support

## Recent spotlight moment
*Placeholder -- drop in a quick memory later.*
